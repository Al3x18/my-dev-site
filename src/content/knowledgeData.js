const knowledgeData = [
  {
    id: 'c-programming',
    name: 'C Programming',
    icon: '⚙️',
    category: 'university',
    topics: [
      'Language fundamentals and syntax',
      'Pointers and memory addressing',
      'Dynamic memory allocation (malloc, free)',
      'Linked Lists implementation',
      'Binary Trees and traversal algorithms',
      'Queue data structure',
      'Stack data structure',
      'Memory management concepts',
      'Data structures implementation from scratch',
      'Buffer overflow vulnerabilities: principles and exploitation',
      'Buffer overflow defenses: stack canaries, ASLR, and secure coding practices',
      'Race conditions and file handling security',
      'Software security issues and secure programming techniques'
    ]
  },
  {
    id: 'java-programming',
    name: 'Java Programming',
    icon: '☕',
    category: 'university',
    topics: [
      'Object-Oriented Programming fundamentals',
      'Classes and Objects',
      'Inheritance and class hierarchies',
      'Polymorphism and interfaces',
      'Java EE enterprise development',
      'Apache Tomcat server deployment',
      'Database connectivity (JDBC)',
      'Remote web request handling',
      'Web application security: Cross-Site Scripting (XSS) prevention',
      'Security testing: fuzzing techniques and vulnerability assessment',
      'University project development'
    ]
  },
  {
    id: 'python-programming',
    name: 'Python Programming',
    icon: '🐍',
    category: 'university',
    topics: [
      'Python language fundamentals: syntax, data types, and control structures',
      'Advanced data structures: lists, dictionaries, sets, tuples, and comprehensions',
      'Object-Oriented Programming: classes, inheritance, polymorphism, and encapsulation',
      'Exception handling and assertions: error management and debugging techniques',
      'Functional programming: lambda functions, map, filter, reduce, and decorators',
      'Design patterns: creational, structural, and behavioral patterns implementation',
      'Python introspection and metaprogramming: reflection and dynamic code manipulation',
      'Generators and coroutines: lazy evaluation and asynchronous programming foundations',
      'Memory management: garbage collection, reference counting, and optimization',
      'Input/Output operations: file handling, serialization (pickle, JSON), and data persistence',
      'Multithreading: thread creation, synchronization, and concurrent execution',
      'Multiprocessing: process management, inter-process communication, and parallel computing',
      'Network programming: socket programming, HTTP clients, and network protocols',
      'Performance optimization: profiling, optimization techniques, and parallelism strategies'
    ]
  },
  {
    id: 'networking',
    name: 'Computer Networks & Security',
    icon: '🌐',
    category: 'university',
    topics: [
      'ISO/OSI Reference Model and TCP/IP Protocol Stack',
      'Application Layer protocols: HTTP/S, IMAP, POP3, DNS, P2P',
      'Transport Layer: TCP, UDP, and congestion control',
      'Network Layer: IP protocol, routing algorithms, and autonomous systems',
      'Data Link Layer: error control, multiple access, and local area networks',
      'Router architecture and packet forwarding mechanisms',
      'Network addressing: IPv4, IPv6, subnetting, and subnet masks',
      'DNS protocol: hierarchy, root servers, TLD, and authoritative servers',
      'Wireless networks: WiFi protocols, cellular networks, and security',
      'Network security: IP layer security (IPSec) and transport layer security (SSL/TLS)',
      'Cryptography: symmetric encryption (DES, AES) and block cipher modes',
      'Asymmetric cryptography: RSA algorithm and key exchange (Diffie-Hellman)',
      'Cryptographic hash functions: SHA-512, HMAC, and message authentication',
      'Digital signatures and authentication in distributed environments',
      'Email security: secure email protocols and technologies',
      'Wireless network security: protocols and protection mechanisms',
      'Firewall technologies and network perimeter defense',
      'Intrusion detection systems and DDoS attack mitigation',
      'Privacy protocols: Tor, Crowds, and Mix networks',
      'Digital forensics: multimedia forensics, source identification, and tamper detection',
      'Security management: risk assessment and formal security models',
      'Cybersecurity frameworks: NIS2 directive and national cybersecurity frameworks',
      'Cloud security: security practices and cloud infrastructure protection',
      'Authentication systems: Kerberos and advanced user authentication protocols',
      'Access control: trust frameworks and access management'
    ]
  },
  {
    id: 'linux',
    name: 'Linux Systems',
    icon: '🐧',
    category: 'university',
    topics: [
      'File system structure and inode architecture',
      'User and group management',
      '/etc/passwd and /etc/shadow files',
      'Permission system (rwx)',
      'Access Control Lists (ACL)',
      'Multi-level security (MLS) concepts',
      'System administration basics',
      'Shell scripting fundamentals'
    ]
  },
  {
    id: 'databases',
    name: 'Database Systems',
    icon: '🗃️',
    category: 'university',
    topics: [
      'Relational database design and modeling',
      'Entity-Relationship (E-R) modeling with cardinalities and hierarchies',
      'Conceptual and logical schema design methodologies',
      'Database design patterns and best practices',
      'Relational algebra operations and query optimization',
      'SQL programming: complex queries, joins, and subqueries',
      'SQL data manipulation: CRUD operations and constraints',
      'Advanced SQL: aggregates, unions, intersections, and set operations',
      'Database normalization: BCNF, 3NF, and dependency theory',
      'PostgreSQL administration and management with pgAdmin',
      'View creation and virtual table management',
      'Transaction management and ACID properties implementation',
      'Physical database design and file organization',
      'Query optimization and performance tuning',
      'Database indexing strategies and memory management',
      'Database security: SQL injection prevention and secure query design',
      'Database access control: authentication, authorization, and privilege management',
      'Database system architecture and evolution'
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Bitcoin',
    icon: '⛓️',
    category: 'university',
    topics: [
      'Blockchain architecture and structure',
      'Bitcoin protocol fundamentals',
      'Block structure and chain linking',
      'Hash functions in blockchain (SHA-256)',
      'Nonce role in mining process',
      'Proof of Work (PoW) mechanism',
      'Mining and block validation',
      'Hash collision theory',
      'Merkle trees and transaction verification',
      'Distributed ledger concepts',
      'Consensus mechanisms'
    ]
  }
]

export default knowledgeData

