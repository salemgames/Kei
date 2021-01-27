#include <AccelStepper.h>
#include <ESP32Servo.h>

#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
int mainLight = 2;
int eyesLight = 15;
bool emergencyStop;
bool goLeftBool;
bool goRightBool;
int relayPin = 33;
int leftSwitch = 25;
int rightSwitch = 32;
int lidsPin = 23;
int leftlimitValue;
int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
volatile int directionInt = 1;
long lastDebounceTime = 0;  // the last time the output pin was toggled
long debounceDelay = 1000;    // the debounce time; increase if the output flickers


// Define a stepper and the pins it will use
AccelStepper stepper(4, 5, 18, 19, 21); // Defaults to AccelStepper::FULL4WIRE (4 pins) on 2, 3, 4, 5



Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards
int servoPin = 23;
int servoPower = 22;
int pos = 0;    // variable to store the servo position


void eyesGoRight () {
  stepper.enableOutputs();
  stepper.runToNewPosition(0);
  stepper.runToNewPosition(25);
  stepper.runToNewPosition(0);
  stepper.disableOutputs();
  emergencyStop = false;
}

void eyesGoLeft () {
  stepper.enableOutputs();
  stepper.runToNewPosition(0);
  stepper.runToNewPosition(-25);
  stepper.runToNewPosition(0);
  stepper.disableOutputs();
  emergencyStop = false;
}

void moveLids() {

  digitalWrite(servoPower, HIGH);

  for (pos = 10; pos <= 90; pos += 4) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);    // tell servo to go to position in variable 'pos'
    delay(15);             // waits 15ms for the servo to reach the position
  }
  for (pos = 90; pos >= 10; pos -= 4) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);    // tell servo to go to position in variable 'pos'
    delay(15);             // waits 15ms for the servo to reach the position
    digitalWrite(servoPower, LOW);
  }
}

void stopLids() {

  digitalWrite(servoPower, LOW);
}

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string value = pCharacteristic->getValue();

      if (value.length() > 0) {
        Serial.println("*********");
        Serial.print("New value: ");
        for (int i = 0; i < value.length(); i++)
          Serial.print(value[i]);

        Serial.println();
        Serial.println("*********");

        if (value == "mainLightOn") {

          digitalWrite(mainLight, HIGH);
        }
        if (value == "mainLightOff") {

          digitalWrite(mainLight, LOW);
        }

        if (value == "eyesLightOn") {

          digitalWrite(eyesLight, HIGH);
        }
        if (value == "eyesLightOff") {

          digitalWrite(eyesLight, LOW);
        }

        if (value == "eyesGoRight") {
          eyesGoRight();

        }
        if (value == "eyesGoLeft") {
          eyesGoLeft();

        }

        if (value == "lidsOn")
        {
          moveLids();
        }
        if (value == "lidsOff")
        {
          stopLids();
        }
      }
    }
};




void setup()
{


  // Allow allocation of all timers
  ESP32PWM::allocateTimer(0);
  ESP32PWM::allocateTimer(1);
  ESP32PWM::allocateTimer(2);
  ESP32PWM::allocateTimer(3);
  myservo.setPeriodHertz(50);    // standard 50 hz servo
  myservo.attach(servoPin, 1000, 2000); // attaches the servo on pin 18 to the servo object


  pinMode(leftSwitch, INPUT_PULLUP);
  pinMode(rightSwitch, INPUT_PULLUP);
  stepper.setCurrentPosition(0);
  stepper.setMaxSpeed(800.0);
  stepper.setAcceleration(700.0);
  delay(500);
  pinMode(relayPin, OUTPUT);
  pinMode(eyesLight, OUTPUT);
  pinMode(mainLight, OUTPUT);
  pinMode(lidsPin, OUTPUT);
  pinMode(servoPower, OUTPUT);
  BLEDevice::init("kei");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setCallbacks(new MyCallbacks());
  pCharacteristic->setValue("Hello World");
  pService->start();
  BLEAdvertising *pAdvertising = pServer->getAdvertising();
  pAdvertising->start();
  stepper.disableOutputs();
  Serial.begin(9600);
}

void loop()
{
  digitalWrite(relayPin, HIGH);
  limitSwitchCutOuput();
}


void limitSwitchCutOuput()
{
  if ((digitalRead(leftSwitch) == LOW || digitalRead(rightSwitch) == LOW) && emergencyStop == false)
  {
    digitalWrite(relayPin, LOW);
    stepper.disableOutputs();
    emergencyStop = true;
  }
}