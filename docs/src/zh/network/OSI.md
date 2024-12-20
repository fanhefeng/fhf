# OSI 模型 `2024 年 10 月`

OSI 模型，即开放式通信系统互联参考模型（Open System Interconnection Reference Model），是国际标准化组织（ISO）提出的一个试图使各种计算机在世界范围内互连为网络的标准框架，简称 OSI。

## OSI 模型结构

OSI 划分的七个层次由高到低依次为：Application(应用层)、Presentation(表示层)、Session(会话层)、Transport(传输层)、Network(网络层)、DataLink(数据链路层)和 Physical(物理层)。其中应用层、表示层和会话层可以视为应用层，而剩余层则可视为数据流动层。

## OSI 模型各层功能

在 OSI 参考模型中规定数据为协议数据单元(PDU)，通常在该层的 PDU 前面增加一个字母的前缀，标识为哪一层数据。

- **Application** 应用层协议数据单元(APNJ)

- **Presentation** 表示层协议数据单元(PPDU)

- **Session** 会话层协议数据单元(SPDU)

- **Transport** 传输层

  段(Segment) 端口号 服务进程 => 服务进程

  报文来到传输层加上端口号封装成段：报文 + 源端口 + 目标端口 = 段

- **Network** 网络层

  数据包(Packet) IP 地址 端 => 端

  段来到网络层加上 IP 地址封装成包： 段 + 源 IP + 目标 IP = 包

- **DataLink** 数据链路层

  帧(Frame) MAC 地址 跳 => 跳

  包来到数据链路层加上 MAC 地址封装成帧： 包 + 源 MAC + 目标 MAC（广播） = 帧

- **Physical** 物理层比特流(Bit)

> 在网络通信中，通过传输层的 PDU 到对方的对等层，以实现通信。如会话层通过传送会话层协议数据单元(SPDU)和对等的会话层进行通信。从逻辑上讲，对等层间的通信，是两个设备的同一层直接通信。而物理上，每一层都只与自己相邻的上下两层直接通信，下层通过服务访问点为上一层提供服务。当接受数据时，数据是自下而上传输；当发送数据时，数据则是自上向下传输的。

### 应用层

为应用程序或用户请求提供各种请求服务。OSI 参考模型最高层，也是最靠近用户的一层，为计算机用户、各种应用程序以及网络提供接口，也为用户直接提供各种网络服务。如 HTTP、FTP、SMTP、POP3、DNS 等。

> 应用层是 OSI 模型中的最高层，是直接面向用户的一层，用户的通信内容要由应用进程解决，这就要求应用层采用不同的应用协议来解决不同类型的应用要求，并且保证这些不同类型的应用所采用的低层通信协议是一致的。应用层中包含了若干独立的用户通用服务协议模块，为网络用户之间的通信提供专用的程序服务。需要注意的是应用层并不是应用程序，而是为应用程序提供服务。

### 表示层

处理数据格式，如编码、加密、压缩等。

> 表示层为在应用过程之间传送的信息提供表示方法的服务。表示层以下各层主要完成的是从源端到目的端可靠地的数据传送，而表示层更关心的是所传送数据的语法和语义。表示层的主要功能是处理在两个通信系统中交换信息的表示方式，主要包括数据格式变化、数据加密与解密、数据压缩与解压等。在网络带宽一定的前提下数据压缩的越小其传输速率就越快，所以表示层的数据压缩与解压被视为掌握网络传输速率的关键因素。表示层提供的数据加密服务是重要的网络安全要素，其确保了数据的安全传输，也是各种安全服务最为重视的关键。表示层为应用层所提供的服务包括：语法转换、语法选择和联接管理。

### 会话层

建立、管理和终止会话，如 SSL、TSL、DAP 等。

> 会话层的主要功能是负责维护两个节点之间的传输联接，确保点到点传输不中断，以及管理数据交换等功能。会话层在应用进程中建立、管理和终止会话。会话层还可以通过对话控制来决定使用何种通信方式，全双工通信或半双工通信。会话层通过自身协议对请求与应答进行协调。会话层主要是管理不同主机上不同进程的通信内容，打造更加完整的协调机制，从而确保用户之间无论是建立对话还是释放会话连接，都能最大程度保证数据交换的及时性和规范性。

### 传输层

提供端到端的可靠传输，如 TCP、UDP 等。

> 传输层是网络体系结构中高低层之间衔接的一个接口层。传输层不仅仅是一个单独的结构层，而是整个分析体系协议的核心。传输层主要为用户提供 End—to—End(端到端)服务，处理数据报错误、数据包次序等传输问题。传输层是计算机通信体系结构中关键一层，它向高层屏蔽了下层数据的通信细节，使用户完全不用考虑物理层、数据链路层和网络层工作的详细情况。传输层使用网络层提供的网络联接服务，依据系统需求可以选择数据传输时使用面向联接的服务或是面向无联接的服务。

### 网络层

负责数据包的路由和转发，如 IP 协议。

> 网络层主要为数据在节点之间传输创建逻辑链路，通过路由选择算法为分组选择最佳路径，从而实现拥塞控制、网络互联等功能。网络层是以路由器为最高节点俯瞰网络的关键层，它负责把分组从源网络传输到目标网络的路由选择工作。互联网是由多个网络组成在一起的一个集合，正是借助了网络层的路由路径选择功能，才能使得多个网络之间的联接得以畅通，信息得以共享。网络层提供的服务有面向联接和面向无联接的服务两种。面向联接的服务是可靠的联接服务，是数据在交换之前必须先建立联接，然后传输数据，结束后终止之前建立联接的服务。网络层以虚电路服务的方式实现面向联接的服务。面向无联接的服务是一种不可靠的服务，不能防止报文的丢失、重发或失序。面向无联接的服务优点在于其服务方式灵活方便，并且非常迅速。网络层以数据报服务的方式实现面向无联接的服务。

### 数据链路层

负责数据帧的传输和错误检测，如以太网协议、网卡、交换机等。

> 数据链路层是在通信实体间建立数据链路联接，传输的基本单位为“帧”，并为网络层提供差错控制和流量控制服务。数据链路层由 MAC(介质访问控制子层)和 LLC(逻辑链路控制子层)组成。介质访问控制子层的主要任务是规定如何在物理线路上传输帧。逻辑链路控制子层对在同一条网络链路上的设备之间的通信进行管理。数据链路控制子层主要负责逻辑上识别不同协议类型，并对其进行封装。也就是说数据链路控制子层会接受网络协议数据、分组的数据报并且添加更多的控制信息，从而把这个分组传送到它的目标设备。

### 物理层

负责比特流的传输和接收，如光纤、电缆、中继器、集线器等。

> 物理层是参考模型中的最底层，主要定义了系统的电气、机械、过程和功能标准。如：电压、物理数据速率、最大传输距离、物理联接器和其他的类似特性。物理层的主要功能是利用传输介质为数据链路层提供物理联接，负责数据流的物理传输工作。物理层传输的基本单位是比特流，即 0 和 1，也就是最基本的电信号或光信号，是最基本的物理传输特征。物理层定义了通信网络之间物理链路的电气特性或机械特性，主要负责比特流和电压、光线等传输方式之间建立互换模式，并且依据比特流进行实时性传输，其中比特流记为 0 或 1。
