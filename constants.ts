import { ExperienceItem, ProjectItem, BlogItem, SkillCategory, BlogPlaylist, CertificationItem } from './types';

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert1',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2023',
    color: 'bg-red-100'
  },
  {
    id: 'cert2',
    title: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: '2024',
    color: 'bg-orange-100'
  },
  {
    id: 'cert3',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2022',
    color: 'bg-blue-100'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Product Security Engineer',
    company: 'Flipkart',
    period: '2024 - Present',
    description: 'Monitoring and analyzing security incidents within a high-scale e-commerce environment. Implementing automated threat detection workflows.',
    tags: ['SIEM', 'Incident Response', 'Network Security'],
    color: 'bg-blue-100'
  },
  {
    id: 'exp2',
    role: 'Software Engineer',
    company: 'DAZN',
    period: '2023 - 2024',
    description: 'Resolved complex technical issues for a global sports streaming platform. Collaborated with engineering teams to improve system reliability.',
    tags: ['Troubleshooting', 'System Admin', 'Customer Success'],
    color: 'bg-purple-100'
  },
  {
    id: 'exp3',
    role: 'AI/ML Engineer Intern',
    company: 'ICRISAT',
    period: '2023',
    description: 'Researched and developed computer vision models for agricultural disease detection. Optimized model inference time for edge deployment.',
    tags: ['Python', 'TensorFlow', 'Computer Vision'],
    color: 'bg-green-100'
  },
  {
    id: 'exp4',
    role: 'Cyber Security Intern',
    company: 'Adiroha Solutions',
    period: '2021',
    description: 'Assisted in vulnerability assessments and penetration testing. Learned foundational principles of ethical hacking and secure coding.',
    tags: ['VAPT', 'OWASP', 'Linux'],
    color: 'bg-red-100'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'Maize Plant Disease Detection',
    description: 'A deep learning solution utilizing CNNs to identify diseases in maize crops from leaf imagery with 95% accuracy.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    type: 'Deep Learning',
    imagePlaceholderColor: 'bg-green-200',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proj2',
    title: 'Library Management System',
    description: 'A secure, role-based Java application for managing library assets, featuring secure authentication and database integration.',
    tech: ['Java', 'SQL', 'Security'],
    type: 'Secure Software',
    imagePlaceholderColor: 'bg-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proj3',
    title: 'Deep Inventory Management',
    description: 'Real-time object detection system for automated inventory tracking using advanced YOLO models.',
    tech: ['YOLO', 'Python', 'IoT'],
    type: 'Object Detection',
    imagePlaceholderColor: 'bg-blue-200',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proj4',
    title: 'Event Planning Website',
    description: 'A responsive frontend application for event scheduling and management with a focus on user experience and accessibility.',
    tech: ['React', 'CSS', 'UX Design'],
    type: 'Frontend',
    imagePlaceholderColor: 'bg-pink-200',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop'
  }
];

// --- BLOG CONTENT HELPERS ---

const LOREM_CONTENT = `
  <p>In the rapidly evolving landscape of technology, staying ahead means constantly adapting. This article explores the nuances of the subject matter, diving deep into the architectural decisions and the trade-offs involved.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">The Core Problem</h3>
  <p>At the heart of the issue lies scalability. As systems grow, the complexity increases non-linearly. We observe this in distributed systems where eventual consistency becomes a major hurdle.</p>
  <p>Consider the following key factors:</p>
  <ul class="list-disc pl-5 space-y-2 mt-4 mb-6">
    <li><strong>Latency:</strong> The time it takes for data to travel across the network.</li>
    <li><strong>Throughput:</strong> The amount of data that can be processed in a given time.</li>
    <li><strong>Availability:</strong> The system's ability to remain operational.</li>
  </ul>
  <h3 class="text-lg font-bold mt-6 mb-3">Proposed Solutions</h3>
  <p>Implementing a robust caching strategy can mitigate read-heavy loads. Tools like Redis or Memcached are industry standards. However, cache invalidation remains one of the two hardest things in computer science.</p>
  <p>Furthermore, adopting a microservices architecture allows for independent scaling of components, though it introduces operational overhead.</p>
  <br/>
  <h3 class="text-lg font-bold mt-6 mb-3">Deep Dive: Trade-offs</h3>
  <p>Every engineering decision is a trade-off. Optimizing for write throughput often comes at the cost of read latency or consistency. The CAP theorem teaches us that we can only have two of Consistency, Availability, and Partition Tolerance.</p>
  <p>In practice, Partition Tolerance is non-negotiable in distributed systems, leaving us to choose between CP (Consistency/Partition Tolerance) and AP (Availability/Partition Tolerance). Understanding your business requirements is key to making this choice.</p>
  <br/>
  <p>To conclude, there is no silver bullet. Engineering is about making the right compromises for your specific use case.</p>
  <p><em>(This is placeholder text expanded to demonstrate scrolling capabilities within the modal view. The content continues below to ensure the modal fills the screen height.)</em></p>
  <h3 class="text-lg font-bold mt-6 mb-3">Future Outlook</h3>
  <p>As we look to the future, trends suggest a move towards serverless architectures and edge computing. These paradigms shift the complexity from the application code to the infrastructure, requiring a new set of skills for engineers.</p>
  <p>Observability, monitoring, and alerting become even more critical in these ephemeral environments. Without them, you are flying blind.</p>
`;

const BLOG_CONTENT_SECURITY = `
  <p>Breaking down a monolithic application into microservices introduces significant complexity in how services communicate securely. In a monolith, functions call each other within the same process memory. In microservices, they communicate over the network, opening up new attack vectors.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">1. Identity Propagation</h3>
  <p>One of the biggest challenges is maintaining user identity across multiple service calls. Using protocols like <strong>OAuth 2.0</strong> and <strong>OIDC</strong> is standard. However, blindly passing JWTs can expose sensitive data. It's crucial to implement "Sender-Constrained" tokens or use MTLS.</p>
  <p>When Service A calls Service B, how does Service B know it is actually Service A? Network policies are one layer, but identity-based segmentation is stronger.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">2. Zero Trust Model</h3>
  <p>Not all microservices need to talk to each other. Implementing a "Zero Trust" model within the cluster is vital. Tools like Service Mesh (e.g., Istio) can manage mTLS and enforce policies that explicitly allow Service A to talk to Service B, while blocking Service C.</p>
  <p>The principle of least privilege applies to services just as much as it applies to users.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">3. Managing Secrets</h3>
  <p>Hardcoding API keys in code is a recipe for disaster. Use tools like HashiCorp Vault or AWS Secrets Manager to inject secrets at runtime. Ensure that these secrets are rotated regularly to minimize the blast radius of a credential leak.</p>
  ${LOREM_CONTENT}
`;

const BLOG_CONTENT_GENAI = `
  <p>Security Operations Centers (SOCs) are overwhelmed. The volume of alerts generated by SIEM tools is unmanageable. Generative AI is emerging as a powerful ally.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">Automated Triage</h3>
  <p>GenAI can ingest alerts, correlate them with threat intelligence feeds, and draft a preliminary incident report. It can distinguish between a false positive and a genuine anomaly by understanding the <em>context</em> of the logs.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">Natural Language Queries</h3>
  <p>Instead of writing complex KQL queries, analysts can ask plain English questions. The LLM translates this into the necessary query syntax, democratizing data access.</p>
  <h3 class="text-lg font-bold mt-6 mb-3">The Risks</h3>
  <p>However, we must be wary of hallucinations. An AI might confidently misinterpret a benign system update as a malicious attack. Human-in-the-loop (HITL) workflows are essential to validate AI findings before taking blocking actions.</p>
  ${LOREM_CONTENT}
`;

// "Newly Added" Blogs (Featured on Homepage)
export const NEW_BLOGS: BlogItem[] = [
  {
    id: 'new1',
    title: 'The Rise of Agentic AI in Security',
    summary: 'Moving beyond passive detection to active, autonomous defense agents.',
    category: 'GenAI',
    readTime: '4 min read',
    date: 'Oct 25, 2023',
    content: `
      <p>We are witnessing a shift from AI as a tool to AI as an agent. In cybersecurity, this means systems that don't just alert a human but take corrective action autonomously.</p>
      <h3 class="text-lg font-bold mt-4 mb-2">Autonomous Patching</h3>
      <p>Imagine an AI agent that detects a vulnerability, verifies it against the current codebase, writes a patch, tests it in a sandbox, and deploys it—all in minutes.</p>
      <p>This is the promise of Agentic AI. However, the risks of "hallucinated" actions are real, requiring robust guardrails and human oversight mechanisms.</p>
      ${LOREM_CONTENT}
    `
  },
  {
    id: 'new2',
    title: 'Kubernetes Security Misconfigurations',
    summary: 'Common pitfalls in K8s deployments and how to secure your clusters.',
    category: 'Security',
    readTime: '6 min read',
    date: 'Oct 20, 2023',
    content: `
      <p>Kubernetes is the OS of the cloud, but it is insecure by default. A single misconfiguration can lead to cluster compromise.</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Privileged Containers:</strong> Avoid running containers with root privileges unless absolutely necessary.</li>
        <li><strong>Network Policies:</strong> By default, all pods can talk to all pods. Lock this down using Network Policies.</li>
        <li><strong>Secrets Management:</strong> Don't store secrets in environment variables. Use a dedicated secrets manager or K8s Secrets (encrypted at rest).</li>
      </ul>
      ${LOREM_CONTENT}
    `
  },
  {
    id: 'new3',
    title: 'The State of API Security 2024',
    summary: 'Why traditional WAFs are failing to stop logic-based API attacks.',
    category: 'API',
    readTime: '5 min read',
    date: 'Oct 15, 2023',
    content: `
      <p>APIs are the plumbing of the modern web, and they are leaking. Traditional WAFs look for SQL injection and XSS, but they struggle with Broken Object Level Authorization (BOLA).</p>
      <h3 class="text-lg font-bold mt-4 mb-2">BOLA: The #1 Threat</h3>
      <p>BOLA occurs when an API provider allows an authenticated user to access the resources of another user simply by changing an ID in the URL. This is a logic flaw, not a syntax flaw, making it invisible to many scanners.</p>
      ${LOREM_CONTENT}
    `
  },
  {
    id: 'new4',
    title: 'Prompt Engineering for Developers',
    summary: 'Getting consistent JSON outputs from LLMs for production apps.',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'Oct 10, 2023',
    content: `
      <p>Integrating LLMs into applications requires more than just sending a string. It requires "System 2" thinking in prompt design.</p>
      <p>Techniques like Chain-of-Thought (CoT) prompting and Few-Shot learning can drastically improve reliability. Furthermore, forcing JSON schemas ensures your downstream code doesn't break.</p>
      ${LOREM_CONTENT}
    `
  },
  {
    id: 'new5',
    title: 'Social Engineering in the AI Era',
    summary: 'How deepfakes and voice cloning are changing the face of phishing.',
    category: 'Security',
    readTime: '5 min read',
    date: 'Oct 05, 2023',
    content: `
      <p>Phishing is no longer just about misspelled emails from a "Prince". With Generative AI, attackers can clone the voice of a CEO or generate hyper-realistic video calls.</p>
      <h3 class="text-lg font-bold mt-4 mb-2">The New Vector: Vishing</h3>
      <p>Voice phishing (vishing) has become dangerously effective. Security awareness training must evolve to teach employees to verify identity through out-of-band channels.</p>
      ${LOREM_CONTENT}
    `
  },
  {
    id: 'new6',
    title: 'Optimizing React Performance',
    summary: 'Techniques to reduce re-renders and improve interaction to next paint (INP).',
    category: 'Engineering',
    readTime: '6 min read',
    date: 'Oct 01, 2023',
    content: `
      <p>React is fast, but it's easy to make it slow. Unnecessary re-renders are the silent killer of performance in large applications.</p>
      <p>Using <code>useMemo</code> and <code>useCallback</code> appropriately, along with code-splitting, can significantly improve user experience.</p>
      ${LOREM_CONTENT}
    `
  }
];

// Archived Blogs organized into Playlists
export const BLOG_PLAYLISTS: BlogPlaylist[] = [
  {
    id: 'plist1',
    title: 'Security Fundamentals',
    description: 'Core concepts every engineer needs to know to build fortress-like applications.',
    iconName: 'shield',
    color: 'bg-red-50 text-red-600',
    blogs: [
      {
        id: 'blog_sec_1',
        title: 'Understanding Zero Trust Architecture',
        summary: 'Why "never trust, always verify" is the future of enterprise security.',
        category: 'Security',
        readTime: '7 min read',
        date: 'Sep 28, 2023',
        content: BLOG_CONTENT_SECURITY
      },
      {
        id: 'blog_sec_2',
        title: 'OWASP Top 10 Explained',
        summary: 'A deep dive into the most critical web application security risks.',
        category: 'Security',
        readTime: '10 min read',
        date: 'Aug 10, 2023',
        content: `<p>Injection, Broken Access Control, and Cryptographic Failures dominate the list. Understanding these is the first step to defense...</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_sec_3',
        title: 'Symmetric vs Asymmetric Encryption',
        summary: 'The mathematical foundations of secure communication on the web.',
        category: 'Security',
        readTime: '8 min read',
        date: 'Jul 05, 2023',
        content: `<p>How do we agree on a secret key over a public channel? Enter Diffie-Hellman.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_sec_4',
        title: 'Cross-Site Scripting (XSS) Deep Dive',
        summary: 'Stored, Reflected, and DOM-based XSS attacks and mitigations.',
        category: 'Security',
        readTime: '6 min read',
        date: 'Jun 20, 2023',
        content: `<p>Sanitize input, encode output. But it's rarely that simple in modern SPAs.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_sec_5',
        title: 'Security Headers 101',
        summary: 'CSP, HSTS, and X-Frame-Options: The first line of defense.',
        category: 'Security',
        readTime: '4 min read',
        date: 'May 12, 2023',
        content: `<p>Setting the right HTTP headers can prevent a wide class of attacks with zero code changes.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_sec_6',
        title: 'Container Security Essentials',
        summary: 'Scanning images and securing the runtime environment.',
        category: 'Security',
        readTime: '6 min read',
        date: 'Apr 30, 2023',
        content: `<p>Containers are not VMs. They share the kernel. This isolation weakness requires specific security controls.</p>${LOREM_CONTENT}`
      }
    ]
  },
  {
    id: 'plist2',
    title: 'AI & The Future',
    description: 'Exploring the intersection of Artificial Intelligence, LLMs, and modern tech.',
    iconName: 'brain',
    color: 'bg-purple-50 text-purple-600',
    blogs: [
      {
        id: 'blog_ai_1',
        title: 'GenAI for Threat Detection',
        summary: 'How LLMs are changing the landscape of SOC operations.',
        category: 'GenAI',
        readTime: '6 min read',
        date: 'Aug 15, 2023',
        content: BLOG_CONTENT_GENAI
      },
      {
        id: 'blog_ai_2',
        title: 'Prompt Injection Attacks',
        summary: 'The SQL Injection of the AI era. How to protect your LLM applications.',
        category: 'GenAI',
        readTime: '5 min read',
        date: 'Jul 22, 2023',
        content: `<p>Prompt injection involves manipulating the input to an LLM to override its system instructions...</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_ai_3',
        title: 'RAG (Retrieval-Augmented Generation)',
        summary: 'Grounding LLMs with your own private data without fine-tuning.',
        category: 'GenAI',
        readTime: '8 min read',
        date: 'Jun 10, 2023',
        content: `<p>Fine-tuning teaches style; RAG teaches facts. Learn how to implement a vector database.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_ai_4',
        title: 'Ethics in AI: Bias and Fairness',
        summary: 'Why models hallucinate and how training data shapes behavior.',
        category: 'GenAI',
        readTime: '5 min read',
        date: 'May 15, 2023',
        content: `<p>Bias in, bias out. The responsibility of curating datasets.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_ai_5',
        title: 'LangChain vs LlamaIndex',
        summary: 'Choosing the right framework for your LLM application.',
        category: 'GenAI',
        readTime: '7 min read',
        date: 'Apr 20, 2023',
        content: `<p>Orchestrating LLM flows is complex. These frameworks simplify the process.</p>${LOREM_CONTENT}`
      }
    ]
  },
  {
    id: 'plist3',
    title: 'Engineering at Scale',
    description: 'Patterns and practices for building resilient distributed systems.',
    iconName: 'server',
    color: 'bg-blue-50 text-blue-600',
    blogs: [
      {
        id: 'blog_eng_1',
        title: 'Securing APIs in Microservices',
        summary: 'Best practices for authentication in distributed systems.',
        category: 'API',
        readTime: '5 min read',
        date: 'Oct 12, 2023',
        content: BLOG_CONTENT_SECURITY
      },
      {
        id: 'blog_eng_2',
        title: 'Event-Driven Architectures',
        summary: 'Decoupling services using Kafka and RabbitMQ.',
        category: 'Engineering',
        readTime: '8 min read',
        date: 'Jun 15, 2023',
        content: `<p>Synchronous HTTP calls couple services together. Event-driven architectures allow for better scalability and resilience...</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_eng_3',
        title: 'Database Sharding Strategies',
        summary: 'Horizontal vs Vertical scaling and when to shard your DB.',
        category: 'Engineering',
        readTime: '10 min read',
        date: 'May 20, 2023',
        content: `<p>Sharding introduces operational complexity. Avoid it until you absolutely must.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_eng_4',
        title: 'Caching Patterns: Write-Through vs Write-Back',
        summary: 'Optimizing data access layers for read and write heavy workloads.',
        category: 'Engineering',
        readTime: '6 min read',
        date: 'Apr 05, 2023',
        content: `<p>Cache consistency is hard. Here are the tradeoffs between different caching strategies.</p>${LOREM_CONTENT}`
      },
      {
        id: 'blog_eng_5',
        title: 'Designing Idempotent APIs',
        summary: 'Ensuring safe retries in distributed systems.',
        category: 'API',
        readTime: '5 min read',
        date: 'Mar 15, 2023',
        content: `<p>Network failures are inevitable. Idempotency keys allow clients to retry safely.</p>${LOREM_CONTENT}`
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    name: 'Security',
    skills: ['OWASP Top 10', 'VAPT', 'SIEM', 'Network Security', 'Cryptography', 'IAM'],
    color: 'bg-red-50 border-red-200 text-red-800'
  },
  {
    name: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Data Analysis'],
    color: 'bg-green-50 border-green-200 text-green-800'
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'Burp Suite', 'Postman'],
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  }
];