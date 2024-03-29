## Node의 개념

### 노드란?

: 자바스크립트 런타임. 

- 런타임: 컴퓨터 프로그램이 실행되고 있는 동안의 동작. 자바스크립트를 웹브라우저 밖에서 굴러갈 수 있게 해줌 (원래 자바스크립트는 웹 브라우저 환경에서만 쓸 수 있음) 

- 런타임 환경 : 컴퓨터가 실행되는 동안 프로세스나 프로그램들을 위한 소프트웨어 서비스를 제공하는 가상 머신. 가상머신! 

  -> 자바스크립트 프로그램이 실행되고 있는 동안의 동작 

<u>노드의 동작으로 자바스크립트는 자바스크립트를 웹브라우저 바깥의 환경에서 굴릴 수 있게 해줌</u>

JVM이 있으면, 어느 환경에서나 Java를 사용할 수 있음.  같은맥락으로! **Node가 있으면, javascript를 언제든 사용할 수 있음** 



## Node.js 장단점

### Node.js의 장점

1. 비동기 I/O 처리를 함. 따라서 CPU로부터 I/O 응답을 대기 할 필요가 없음.
2. Single Thread 기반이다. 따라서 clock문제를 처리하는데 매우 최적화 되어 있다. 또한 multi Thread에서의 Thread간 동기화 처리 등의 복잡한 과정이 필요가 없다. 즉, 프로그래밍을 단순하게 만들어 준다.
3. 프론트엔드와 백엔드를 자바스크립트 같은 언어로 관리가 가능함. 웹개발자들은 새로운 언어를 습득하지 않고 기존 언어를 활용해 서버기술을 빨리 응용 할 수 있게 됨.

### Node.js의 단점

1. Single Thread 기반 -> 특정 작업의 시간이 많이 걸리면 전체 시스템의 성능이 매우 급격하게 떨어지게 됨으로, 가벼운 작업위주의 개발에 적절하다.
2. 자바스크립트의 가독성이 낮음. 자바 등 다른 언어에 비하여 코드의 가독성이 좋지 않아 유지 보수가 어렵다. ex) callback hell
3. script언어로, 코드를 실 행 후 에러 확인이 가능함. 따라서 프로세스가 잘 죽게됨. 개발 과정에서 코드 테스트에 비중이 많이 들어감.



## 노드의 핵심개념

### 이벤트기반 


### 논블로킨 I/O모델 


### 싱글스레드 
