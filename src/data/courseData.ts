import { CourseModule, CouponCode } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    day: 1,
    title: {
      id: 'Hari 1: Fondasi AI & Era Agentic AI',
      en: 'Day 1: AI Fundamentals & Agentic AI Era',
    },
    category: { id: 'Konsep Dasar', en: 'Fundamentals' },
    description: {
      id: 'Memahami landscape Artificial Intelligence modern, perbedaan Machine Learning, Deep Learning, dan Generative AI.',
      en: 'Understanding the modern Artificial Intelligence landscape, differences between ML, Deep Learning, and Generative AI.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: [
        'Memahami arsitektur AI modern',
        'Mengidentifikasi pemanfaatan AI di industri',
        'Navigasi platform AI Navigator MAXY Academy',
      ],
      en: [
        'Understand modern AI architecture',
        'Identify AI use-cases in industry',
        'Navigate the AI Navigator MAXY Academy platform',
      ],
    },
    summaryContent: {
      id: 'Selamat datang di AI Navigator! Di hari pertama ini, kita akan membahas pergeseran paradigma dari AI konvensional ke Generative AI & Agentic AI yang mampu mengeksekusi tugas secara mandiri.',
      en: 'Welcome to AI Navigator! On day one, we explore the paradigm shift from traditional AI to Generative & Agentic AI capable of autonomous execution.',
    },
    quiz: [
      {
        id: 101,
        question: {
          id: 'Apa perbedaan utama Generative AI dibanding model AI tradisional?',
          en: 'What is the primary difference of Generative AI compared to traditional AI?',
        },
        options: {
          id: [
            'Generative AI hanya bisa mengklasifikasikan data',
            'Generative AI mampu menghasilkan konten baru seperti teks, gambar, dan kode',
            'Generative AI membutuhkan GPU tanpa memori',
            'Generative AI tidak memerlukan data pelatihan',
          ],
          en: [
            'Generative AI can only classify data',
            'Generative AI can generate new content such as text, images, and code',
            'Generative AI requires GPU without memory',
            'Generative AI requires no training data',
          ],
        },
        correctIndex: 1,
        explanation: {
          id: 'Generative AI dirancang khusus untuk memproduksi ide dan konten baru berbasis pola data masukan.',
          en: 'Generative AI is designed to produce new content based on learned data patterns.',
        },
      },
    ],
  },
  {
    day: 2,
    title: {
      id: 'Hari 2: Master Class Prompt Engineering (CLEAR Framework)',
      en: 'Day 2: Prompt Engineering Masterclass (CLEAR Framework)',
    },
    category: { id: 'Prompt Engineering', en: 'Prompt Engineering' },
    description: {
      id: 'Teknik merancang prompt presisi tinggi menggunakan kerangka CLEAR (Context, Logic, Example, Action, Result).',
      en: 'Mastering high-precision prompt techniques using the CLEAR framework (Context, Logic, Example, Action, Result).',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: [
        'Menerapkan CLEAR Prompting Framework',
        'Menghindari AI Hallucination dengan Role Prompting',
        'Menggunakan Few-Shot vs Zero-Shot prompting',
      ],
      en: [
        'Apply CLEAR Prompting Framework',
        'Avoid AI Hallucinations using Role Prompting',
        'Utilize Few-Shot vs Zero-Shot prompting',
      ],
    },
    summaryContent: {
      id: 'Prompting bukan sekadar mengetik pertanyaan, melainkan menyusun instruksi terstruktur. Dengan CLEAR Framework, akurasi respon LLM meningkat hingga 85%.',
      en: 'Prompting is not just typing a question; it is structuring instructions. CLEAR Framework increases LLM accuracy up to 85%.',
    },
    quiz: [
      {
        id: 201,
        question: {
          id: 'Komponen "E" pada CLEAR Framework merujuk pada...',
          en: 'The "E" component in CLEAR Framework refers to...',
        },
        options: {
          id: ['Emotion', 'Example (Contoh)', 'Error', 'Evaluation'],
          en: ['Emotion', 'Example', 'Error', 'Evaluation'],
        },
        correctIndex: 1,
        explanation: {
          id: 'E melambangkan Example (Contoh acuan) untuk memberikan panduan bentuk output pada LLM.',
          en: 'E stands for Example to provide structural reference for the LLM output.',
        },
      },
    ],
  },
  {
    day: 3,
    title: {
      id: 'Hari 3: Advanced Research & Fact-Checking dengan AI Grounding',
      en: 'Day 3: Advanced Research & Fact-Checking with AI Grounding',
    },
    category: { id: 'Riset AI', en: 'AI Research' },
    description: {
      id: 'Meningkatkan validitas data riset dengan Google Gemini Grounding, Perplexity, dan teknik cross-verification.',
      en: 'Enhancing research validity with Google Gemini Grounding, Perplexity, and cross-verification techniques.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Mengoperasikan Real-time Web Grounding', 'Melakukan atribusi sumber sitasi', 'Validasi halusinasi data'],
      en: ['Operate Real-time Web Grounding', 'Perform source citation attribution', 'Validate data hallucinations'],
    },
    summaryContent: {
      id: 'Riset modern menggabungkan kecepatan pencarian AI dengan validasi sumber data langsung untuk kebutuhan profesional.',
      en: 'Modern research combines speed of AI generation with real-time web source validation for professional needs.',
    },
    quiz: [
      {
        id: 301,
        question: {
          id: 'Apa fungsi utama dari Web Grounding dalam LLM?',
          en: 'What is the main function of Web Grounding in LLMs?',
        },
        options: {
          id: [
            'Membuat gambar sintetis',
            'Menghubungkan respon AI dengan informasi web terkini dan terverifikasi',
            'Menghapus kode program',
            'Mempercepat proses komputasi lokal',
          ],
          en: [
            'Create synthetic images',
            'Connect AI responses with real-time verified web information',
            'Delete program code',
            'Speed up local compute',
          ],
        },
        correctIndex: 1,
        explanation: {
          id: 'Grounding memastikan respon AI didasarkan pada data faktual terbaru dari sumber web.',
          en: 'Grounding ensures AI responses rely on live, verified web data sources.',
        },
      },
    ],
  },
  {
    day: 4,
    title: {
      id: 'Hari 4: Produktivitas Mahasiswa & Dokumen Analisis AI',
      en: 'Day 4: Student Productivity & AI Document Analysis',
    },
    category: { id: 'Produktivitas', en: 'Productivity' },
    description: {
      id: 'Strategi ekstraksi jurnal ilmiah, ringkasan PDF 100 halaman, dan pembuatan laporan otomatis untuk akademisi.',
      en: 'Academic paper extraction, 100-page PDF summarizing, and automated report generation for academics.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Ekstraksi poin kunci dari PDF tebal', 'Sintesis jurnal ilmiah', 'Membuat draft executive summary'],
      en: ['Extract key points from thick PDFs', 'Scientific journal synthesis', 'Draft executive summaries'],
    },
    summaryContent: {
      id: 'Modul khusus BEM/HIMA & Mahasiswa untuk mempercepat riset akademis hingga 10x lebih efisien.',
      en: 'Tailored module for student organizations & researchers to boost academic research speed by 10x.',
    },
    quiz: [
      {
        id: 401,
        question: {
          id: 'Fitur Long-Context Window pada AI bermanfaat untuk...',
          en: 'The Long-Context Window feature in AI is useful for...',
        },
        options: {
          id: [
            'Memproses dokumen lengkap seperti buku atau tesis dalam satu kali prompt',
            'Menampilkan animasi video 3D',
            'Merekam suara dalam format MP3',
            'Mengontrol jaringan Bluetooth',
          ],
          en: [
            'Processing complete documents like books or theses in a single prompt',
            'Displaying 3D video animations',
            'Recording MP3 audio',
            'Controlling Bluetooth networks',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Context window yang luas memungkinkan analisis seluruh bab tesis atau buku dalam sekali proses.',
          en: 'A wide context window enables whole thesis chapter or book analysis in one go.',
        },
      },
    ],
  },
  {
    day: 5,
    title: {
      id: 'Hari 5: Generative Visuals & Design System dengan AI',
      en: 'Day 5: Generative Visuals & AI Design Systems',
    },
    category: { id: 'Visual & Desain', en: 'Visual & Design' },
    description: {
      id: 'Pembuatan aset visual promosi, brand mascot, dan ilustrasi pemasaran menggunakan Midjourney, DALL-E, & Gemini Image.',
      en: 'Creating promotional assets, brand mascots, and marketing illustrations with AI image models.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Teknik prompt visual aspek rasio', 'Menciptakan konsistensi karakter mascot', 'Aset konten media sosial'],
      en: ['Visual prompt aspect ratio techniques', 'Creating consistent mascot characters', 'Social media asset creation'],
    },
    summaryContent: {
      id: 'Pelajari cara menghasilkan desain visual kelas dunia tanpa keahlian grafis rumit.',
      en: 'Learn how to generate world-class visual designs without complex graphic skills.',
    },
    quiz: [
      {
        id: 501,
        question: {
          id: 'Parameter penting dalam prompt gambar untuk menjaga komposisi adalah...',
          en: 'An important parameter in image prompts for maintaining composition is...',
        },
        options: {
          id: ['Aspek rasio (Aspect Ratio)', 'Ukuran file RAM', 'Jumlah huruf', 'Tipe font'],
          en: ['Aspect Ratio', 'RAM file size', 'Character count', 'Font type'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Aspect ratio menentukan dimensi visual seperti 16:9 untuk banner dan 1:1 untuk feed.',
          en: 'Aspect ratio determines visual dimensions like 16:9 for banners and 1:1 for feeds.',
        },
      },
    ],
  },
  {
    day: 6,
    title: {
      id: 'Hari 6: AI Audio Synthesis, Voiceover, & Podcasting',
      en: 'Day 6: AI Audio Synthesis, Voiceover, & Podcasting',
    },
    category: { id: 'Audio & Media', en: 'Audio & Media' },
    description: {
      id: 'Teknologi Text-to-Speech natural, voice cloning etis, dan pembuatan audio podcast otomatis untuk konten viral TikTok.',
      en: 'Natural Text-to-Speech, ethical voice cloning, and automated audio podcast creation for viral TikTok content.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Voice cloning untuk narasi konten', 'Pengaturan intonasi dan emosi audio', 'Automasi sulap suara'],
      en: ['Voice cloning for content narration', 'Intonation and emotion tuning', 'Voice automation'],
    },
    summaryContent: {
      id: 'Audio AI memungkinkan produksi voiceover berkualitas studio dalam hitungan detik.',
      en: 'Audio AI enables studio-quality voiceover production in seconds.',
    },
    quiz: [
      {
        id: 601,
        question: {
          id: 'Teknologi yang mengubah teks tulisan menjadi suara manusia alami disebut...',
          en: 'Technology converting written text into natural human voice is called...',
        },
        options: {
          id: ['TTS (Text-to-Speech)', 'OCR', 'NLP', 'SVM'],
          en: ['TTS (Text-to-Speech)', 'OCR', 'NLP', 'SVM'],
        },
        correctIndex: 0,
        explanation: {
          id: 'TTS (Text-to-Speech) mengonversi teks menjadi gelombang suara sintetis yang alami.',
          en: 'TTS converts text into natural synthetic sound waves.',
        },
      },
    ],
  },
  {
    day: 7,
    title: {
      id: 'Hari 7: Content Creation Automation & TikTok Growth Strategy',
      en: 'Day 7: Content Automation & TikTok Growth Strategy',
    },
    category: { id: 'Pemasaran & Media', en: 'Marketing & Media' },
    description: {
      id: 'Strategi menghasilkan 30 konten komik & animasi AI bulanan untuk mengejar target 10.000 follower TikTok.',
      en: 'Strategy to produce 30 monthly AI comic & animation posts to hit 10,000 TikTok follower targets.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Hook storytelling 3 detik pertama', 'Pipeline pembuatan komik AI', 'Jadwal posting otomatis'],
      en: ['First 3-second storytelling hooks', 'AI comic generation pipeline', 'Automated posting schedule'],
    },
    summaryContent: {
      id: 'Sesuai strategi inisiatif AI Navigator: Kampanye TikTok harian untuk mendorong jangkauan publik dan giveaway beasiswa.',
      en: 'Aligned with AI Navigator strategy: Daily TikTok campaigns to boost public reach and scholarship giveaways.',
    },
    quiz: [
      {
        id: 701,
        question: {
          id: 'Faktor kunci untuk meningkatkan dwell-time penonton pada video TikTok AI adalah...',
          en: 'The key factor to increase viewer dwell-time on TikTok AI videos is...',
        },
        options: {
          id: ['Hook visual & audio yang kuat pada 3 detik pertama', 'Durasi video di atas 2 jam', 'Tidak memakai caption', 'Menggunakan resolusi rendah'],
          en: ['Strong visual & audio hook in the first 3 seconds', 'Video duration over 2 hours', 'No captions', 'Low resolution'],
        },
        correctIndex: 0,
        explanation: {
          id: '3 detik pertama menentukan apakah audiens melanjut menonton atau swipe.',
          en: 'The first 3 seconds dictate whether the audience stays or swipes away.',
        },
      },
    ],
  },
  {
    day: 8,
    title: {
      id: 'Hari 8: Coding Sederhana dengan AI Assistant (No-Code to Low-Code)',
      en: 'Day 8: Simple Coding with AI Assistants (No-Code to Low-Code)',
    },
    category: { id: 'Pengembangan', en: 'Development' },
    description: {
      id: 'Membangun landing page dan skrip otomatisasi Python tanpa latar belakang IT menggunakan prompt pembantu.',
      en: 'Building landing pages and Python automation scripts without IT background using guided prompts.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Memahami HTML/CSS dasar via AI', 'Debugging skrip sederhana', 'Deploy web app gratis'],
      en: ['Understand basic HTML/CSS via AI', 'Simple script debugging', 'Deploy free web apps'],
    },
    summaryContent: {
      id: 'Siapa saja bisa membangun aplikasi web dasar dan alat otomatisasi sederhana dengan bantuan AI Copilot.',
      en: 'Anyone can build basic web apps and simple automation tools with AI Copilot support.',
    },
    quiz: [
      {
        id: 801,
        question: {
          id: 'Istilah untuk asisten AI yang membantu menulis dan membenarkan kode program adalah...',
          en: 'The term for an AI assistant helping to write and debug code is...',
        },
        options: {
          id: ['AI Coding Copilot', 'DBMS Engine', 'Network Switch', 'Hardware Driver'],
          en: ['AI Coding Copilot', 'DBMS Engine', 'Network Switch', 'Hardware Driver'],
        },
        correctIndex: 0,
        explanation: {
          id: 'AI Coding Copilot memberikan saran sintaksis dan perbaikan bug secara real-time.',
          en: 'AI Coding Copilot gives real-time syntax suggestions and bug fixes.',
        },
      },
    ],
  },
  {
    day: 9,
    title: {
      id: 'Hari 9: AI Data Analysis & Interactive Dashboards',
      en: 'Day 9: AI Data Analysis & Interactive Dashboards',
    },
    category: { id: 'Analisis Data', en: 'Data Analytics' },
    description: {
      id: 'Analisis tren penjualan, data survei kampus, dan pembuatan visualisasi grafik interaktif dalam hitungan menit.',
      en: 'Analyzing sales trends, campus survey data, and creating interactive charts in minutes.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Pembersihan data otomatis (Data Cleaning)', 'Analisis deskriptif & prediktif', 'Membuat insight bisnis'],
      en: ['Automated data cleaning', 'Descriptive & predictive analysis', 'Creating business insights'],
    },
    summaryContent: {
      id: 'Ubah spreadsheet berantakan menjadi dashboard visual yang memberikan wawasan tindakan nyata.',
      en: 'Turn messy spreadsheets into visual dashboards offering actionable insights.',
    },
    quiz: [
      {
        id: 901,
        question: {
          id: 'Langkah pertama sebelum menganalisis data dengan AI adalah...',
          en: 'The first step before analyzing data with AI is...',
        },
        options: {
          id: ['Data Cleaning & Normalisasi', 'Langsung membuat chart 3D', 'Menghapus semua baris', 'Mengubah file menjadi audio'],
          en: ['Data Cleaning & Normalization', 'Directly create 3D charts', 'Delete all rows', 'Convert file to audio'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Pembersihan data memastikan hasil analisis AI valid dan bebas dari bias data kosong.',
          en: 'Data cleaning ensures AI analysis is valid and free from empty cell biases.',
        },
      },
    ],
  },
  {
    day: 10,
    title: {
      id: 'Hari 10: AI Workflow Automation dengan Make & n8n',
      en: 'Day 10: AI Workflow Automation with Make & n8n',
    },
    category: { id: 'Otomatisasi', en: 'Automation' },
    description: {
      id: 'Menghubungkan AI dengan Email, WhatsApp, Google Sheets, dan CRM untuk kerja serba otomatis.',
      en: 'Connecting AI to Email, WhatsApp, Google Sheets, and CRMs for fully automated workflows.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Trigger & Action konsep', 'Integrasi API tanpa coding', 'Bot balasan email pintar'],
      en: ['Trigger & Action concepts', 'No-code API integration', 'Smart email response bots'],
    },
    summaryContent: {
      id: 'Hubungkan aplikasi favorit Anda dengan AI untuk menghemat hingga 20 jam kerja rutin setiap minggu.',
      en: 'Connect your favorite apps with AI to save up to 20 routine work hours per week.',
    },
    quiz: [
      {
        id: 1001,
        question: {
          id: 'Dalam istilah automasi, peristiwa yang memulai sebuah workflow disebut...',
          en: 'In automation terms, the event that initiates a workflow is called...',
        },
        options: {
          id: ['Trigger', 'Payload', 'Router', 'Database'],
          en: ['Trigger', 'Payload', 'Router', 'Database'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Trigger adalah pemicu awal (misalnya email masuk) yang menjalankan alur kerja otomatis.',
          en: 'Trigger is the initial event (e.g. incoming email) that starts the automated workflow.',
        },
      },
    ],
  },
  {
    day: 11,
    title: {
      id: 'Hari 11: Retrieval-Augmented Generation (RAG) & Custom Knowledge',
      en: 'Day 11: Retrieval-Augmented Generation (RAG) & Custom Knowledge Base',
    },
    category: { id: 'Arsitektur AI', en: 'AI Architecture' },
    description: {
      id: 'Status Progres Pembelajaran 11/28: Membangun chatbot cerdas berbasis dokumen internal perusahaan/kampus.',
      en: 'Learning Progress Status 11/28: Building smart chatbots powered by internal document knowledge bases.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Prinsip dasar RAG & Vector Database', 'Embedding teks menjadi nilai numerik', 'Menghindari kebocoran data'],
      en: ['Core principles of RAG & Vector DBs', 'Text embeddings into numeric vectors', 'Preventing data leaks'],
    },
    summaryContent: {
      id: 'Selamat! Anda mencapai modul 11 dari 28. RAG adalah teknologi standar industri agar AI menjawab berdasarkan dokumen rahasia organisasi Anda sendiri.',
      en: 'Congratulations! You reached module 11 of 28. RAG is the industry standard technology allowing AI to answer based on your organization custom documents.',
    },
    quiz: [
      {
        id: 1101,
        question: {
          id: 'Apa keunggulan utama RAG dibanding sekadar melatih ulang model AI dari awal?',
          en: 'What is the primary advantage of RAG compared to retraining an AI model from scratch?',
        },
        options: {
          id: [
            'RAG lebih cepat, murah, dan dapat diperbarui secara real-time tanpa retraining',
            'RAG tidak memerlukan koneksi internet',
            'RAG mengubah teks menjadi gambar',
            'RAG hanya bekerja pada komputer mainframe',
          ],
          en: [
            'RAG is faster, cheaper, and updates real-time without retraining',
            'RAG requires no internet',
            'RAG turns text to images',
            'RAG only runs on mainframe computers',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'RAG mengambil dokumen terkini saat pertanyaan diajukan, menghemat biaya komputasi besar.',
          en: 'RAG retrieves live documents at query time, saving massive compute costs.',
        },
      },
    ],
  },
  {
    day: 12,
    title: {
      id: 'Hari 12: Autonomous AI Agents & Multi-Agent Frameworks',
      en: 'Day 12: Autonomous AI Agents & Multi-Agent Frameworks',
    },
    category: { id: 'Agentic AI', en: 'Agentic AI' },
    description: {
      id: 'Merancang tim agen AI virtual (Peneliti, Penulis, Editor, Reviewer) yang bekerja kolaboratif.',
      en: 'Designing virtual AI agent teams (Researcher, Writer, Editor, Reviewer) collaborating autonomously.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Konsep CrewAI & AutoGen', 'Delegasi tugas antar agen', 'Evaluasi hasil keluaran agen'],
      en: ['CrewAI & AutoGen concepts', 'Task delegation between agents', 'Evaluating agent outputs'],
    },
    summaryContent: {
      id: 'Masa depan AI adalah sistem multi-agen tempat beberapa AI bertukar pikiran dan menyelesaikan proyek kompleks.',
      en: 'The future of AI lies in multi-agent systems where multiple AIs collaborate and solve complex projects.',
    },
    quiz: [
      {
        id: 1201,
        question: {
          id: 'Dalam arsitektur Multi-Agent, setiap agen diberikan...',
          en: 'In a Multi-Agent architecture, each agent is assigned a...',
        },
        options: {
          id: ['Role, Goal, dan Backstory spesifik', 'Satu lagu favorit', 'Satu layar monitor', 'Satu alamat IP lokal'],
          en: ['Specific Role, Goal, and Backstory', 'One favorite song', 'One monitor screen', 'One local IP address'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Spesifikasi peran dan tujuan yang jelas membuat agen bekerja secara fokus dan efisien.',
          en: 'Clear role definitions ensure focused and efficient agent performance.',
        },
      },
    ],
  },
  {
    day: 13,
    title: {
      id: 'Hari 13: Computer Vision & Multi-Modal AI',
      en: 'Day 13: Computer Vision & Multi-Modal AI',
    },
    category: { id: 'Multi-Modal', en: 'Multi-Modal' },
    description: {
      id: 'Memproses teks, suara, dan gambar secara bersamaan dengan model Multi-Modal seperti Gemini 1.5 Pro & Flash.',
      en: 'Processing text, voice, and visual inputs simultaneously with Multi-Modal models.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Pengenalan objek pada gambar', 'Membaca diagram & bagan teknis', 'Analisis video waktu nyata'],
      en: ['Object recognition in images', 'Reading technical charts & diagrams', 'Real-time video analysis'],
    },
    summaryContent: {
      id: 'Multi-modal AI memahami dunia sebagaimana manusia: melihat, mendengar, dan membaca secara simultan.',
      en: 'Multi-modal AI perceives the world like humans: seeing, hearing, and reading simultaneously.',
    },
    quiz: [
      {
        id: 1301,
        question: {
          id: 'Istilah "Multi-Modal" dalam konteks AI mengacu pada kemampuan...',
          en: 'The term "Multi-Modal" in AI context refers to the ability to...',
        },
        options: {
          id: [
            'Menerima dan memproses beragam tipe input (teks, gambar, audio, video)',
            'Hanya memproses angka bulat saja',
            'Berjalan tanpa menggunakan listrik',
            'Menghapus memori secara otomatis setiap jam',
          ],
          en: [
            'Accept and process diverse input types (text, images, audio, video)',
            'Only process integers',
            'Run without electricity',
            'Auto-delete memory every hour',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Multi-modal menggabungkan pemahaman lintas format input visual, spasial, dan konversasional.',
          en: 'Multi-modal combines cross-format visual, spatial, and conversational understanding.',
        },
      },
    ],
  },
  {
    day: 14,
    title: {
      id: 'Hari 14: AI Ethics, Bias, & Data Privacy Compliance',
      en: 'Day 14: AI Ethics, Bias, & Data Privacy Compliance',
    },
    category: { id: 'Etika & Privasi', en: 'Ethics & Privacy' },
    description: {
      id: 'Prinsip penggunaan AI yang bertanggung jawab, pencegahan kebiasaan data, dan regulasi perlindungan data pribadi.',
      en: 'Responsible AI usage principles, data bias mitigation, and personal data privacy regulations.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Mengidentifikasi bias algoritma', 'Perlindungan Hak Cipta AI', 'Standar keamanan data ISO/GDPR'],
      en: ['Identify algorithmic bias', 'AI Copyright protection', 'ISO/GDPR data security standards'],
    },
    summaryContent: {
      id: 'Sertifikasi profesional mewajibkan pemahaman etika agar inovasi AI tetap aman dan menghormati hak privasi.',
      en: 'Professional certification mandates ethical awareness so AI innovation remains safe and privacy-compliant.',
    },
    quiz: [
      {
        id: 1401,
        question: {
          id: 'Mengapa kebocoran data rahasia ke model AI publik harus dihindari?',
          en: 'Why must confidential data leaks to public AI models be avoided?',
        },
        options: {
          id: [
            'Data input berisiko dijadikan bahan pelatihan terbuka bagi pengguna umum',
            'Model AI akan langsung mati',
            'Komputer akan memformat ulang drive C',
            'Kecepatan Wi-Fi akan melambat',
          ],
          en: [
            'Input data risks being used as public training material for all users',
            'The AI model shuts down instantly',
            'The computer reformats Drive C',
            'Wi-Fi speed slows down',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Penggunaan API berlisensi enterprise atau opsi opt-out diperlukan untuk menjaga privasi data sensitif.',
          en: 'Enterprise licensed APIs or opt-out options are needed to safeguard sensitive data privacy.',
        },
      },
    ],
  },
  {
    day: 15,
    title: {
      id: 'Hari 15: AI-Driven Digital Marketing & Customer Journey',
      en: 'Day 15: AI-Driven Digital Marketing & Customer Journey',
    },
    category: { id: 'Bisnis', en: 'Business' },
    description: {
      id: 'Personalisasi kampanye pemasaran, SEO dengan AI, dan segmentasi audiens otomatis.',
      en: 'Marketing campaign personalization, AI SEO, and automated audience segmentation.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Copywriting konversi tinggi', 'Optimasi keyword pencarian AI', 'Analisis funnel pemasaran'],
      en: ['High conversion copywriting', 'AI search keyword optimization', 'Marketing funnel analysis'],
    },
    summaryContent: {
      id: 'Optimalkan rasio konversi kampanye digital Anda dengan menargetkan pesan yang dipersonalisasi AI.',
      en: 'Optimize digital campaign conversion rates by targeting AI-personalized messaging.',
    },
    quiz: [
      {
        id: 1501,
        question: {
          id: 'Keunggulan utama copywriting berbasis AI adalah...',
          en: 'The main advantage of AI-based copywriting is...',
        },
        options: {
          id: [
            'Dapat menghasilkan puluhan variasi pesan A/B testing dalam hitungan menit',
            'Selalu 100% tanpa perlu ditinjau manusia',
            'Hanya bisa ditulis dalam bahasa Latin',
            'Tidak membutuhkan internet',
          ],
          en: [
            'Generates dozens of A/B testing message variations in minutes',
            'Always 100% ready without human review',
            'Can only write in Latin',
            'Requires no internet',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'AI mempercepat eksplorasi sudut pandang copywriting untuk pengujian variasi kampanye.',
          en: 'AI speeds up copywriting angle exploration for campaign variation testing.',
        },
      },
    ],
  },
  {
    day: 16,
    title: {
      id: 'Hari 16: FinTech & AI Financial Modeling',
      en: 'Day 16: FinTech & AI Financial Modeling',
    },
    category: { id: 'Keuangan', en: 'Finance' },
    description: {
      id: 'Proyeksi arus kas, deteksi anomali anggaran, dan pembuatan analisis risiko keuangan berbasis AI.',
      en: 'Cash flow projections, budget anomaly detection, and AI financial risk modeling.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Proyeksi pendapatan otomatis', 'Deteksi pengeluaran mencurigakan', 'Evaluasi kelayakan investasi'],
      en: ['Automated revenue projections', 'Suspicious expense detection', 'Investment feasibility evaluation'],
    },
    summaryContent: {
      id: 'Bagi praktisi keuangan dan pemilik bisnis, AI memangkas waktu pembuatan laporan keuangan bulanan.',
      en: 'For financial practitioners and business owners, AI cuts monthly financial reporting time significantly.',
    },
    quiz: [
      {
        id: 1601,
        question: {
          id: 'AI dapat mendeteksi kecurangan transaksi keuangan melalui pola...',
          en: 'AI detects financial transaction fraud through patterns of...',
        },
        options: {
          id: ['Anomali statistik dari kebiasaan normal', 'Warna latar belakang monitor', 'Nama pemilik bank', 'Jam buka kantor'],
          en: ['Statistical anomalies from normal behavior', 'Monitor background color', 'Bank owner name', 'Office hours'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Algoritma deteksi anomali mengidentifikasi pencilan transaksi yang melenceng dari pola historis.',
          en: 'Anomaly detection algorithms identify transaction outliers deviating from historical norms.',
        },
      },
    ],
  },
  {
    day: 17,
    title: {
      id: 'Hari 17: Fine-Tuning LLM & Model Customization',
      en: 'Day 17: Fine-Tuning LLMs & Model Customization',
    },
    category: { id: 'Teknis Lanjutan', en: 'Advanced Tech' },
    description: {
      id: 'Memahami kapan menggunakan Prompt Engineering, RAG, atau Fine-Tuning model open-source.',
      en: 'Understanding when to use Prompt Engineering, RAG, or Fine-Tuning open-source models.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Konsep LoRA & QLoRA', 'Penyusunan dataset pelatihan (JSONL)', 'Evaluasi benchmark model'],
      en: ['LoRA & QLoRA concepts', 'Training dataset preparation (JSONL)', 'Model benchmark evaluation'],
    },
    summaryContent: {
      id: 'Fine-tuning berguna saat Anda ingin AI mengadopsi nada suara atau format output yang sangat khusus.',
      en: 'Fine-tuning is useful when you need AI to adopt a highly specialized tone of voice or output format.',
    },
    quiz: [
      {
        id: 1701,
        question: {
          id: 'Metode hemat memori untuk melatih kembali bobot model AI disebut...',
          en: 'A memory-efficient method to retrain AI model weights is called...',
        },
        options: {
          id: ['LoRA (Low-Rank Adaptation)', 'FTP Transfer', 'HTML Parsing', 'CSS Styling'],
          en: ['LoRA (Low-Rank Adaptation)', 'FTP Transfer', 'HTML Parsing', 'CSS Styling'],
        },
        correctIndex: 0,
        explanation: {
          id: 'LoRA memungkinkan fine-tuning dengan melatih sebagian kecil parameter tambahan secara efisien.',
          en: 'LoRA allows fine-tuning by efficiently training a tiny fraction of adapter parameters.',
        },
      },
    ],
  },
  {
    day: 18,
    title: {
      id: 'Hari 18: Enterprise AI Architecture & Security',
      en: 'Day 18: Enterprise AI Architecture & Security',
    },
    category: { id: 'Keamanan', en: 'Security' },
    description: {
      id: 'Mendesain sistem AI skala industri yang aman, tahan peretasan prompt injection, dan tersertifikasi.',
      en: 'Designing industrial-scale AI systems that are secure, prompt-injection resilient, and certified.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Mitigasi Prompt Injection Attack', 'Rate limiting & API gateway', 'Logging & audit trail AI'],
      en: ['Prompt Injection Attack mitigation', 'Rate limiting & API gateways', 'AI logging & audit trails'],
    },
    summaryContent: {
      id: 'Pastikan aplikasi AI Anda terlindungi dari serangan siber khusus seperti jailbreaking dan data extraction.',
      en: 'Ensure your AI applications are shielded from cyber threats like jailbreaking and data extraction.',
    },
    quiz: [
      {
        id: 1801,
        question: {
          id: 'Serangan yang bertujuan membajak instruksi awal AI disebut...',
          en: 'An attack aimed at hijacking initial AI instructions is called...',
        },
        options: {
          id: ['Prompt Injection', 'SQL Injection', 'Buffer Overflow', 'Phishing Email'],
          en: ['Prompt Injection', 'SQL Injection', 'Buffer Overflow', 'Phishing Email'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Prompt injection memasukkan teks manipulatif untuk memaksa AI melanggar aturan keamanannya.',
          en: 'Prompt injection inserts manipulative text to force AI to bypass security rules.',
        },
      },
    ],
  },
  {
    day: 19,
    title: {
      id: 'Hari 19: AI Productivity Stack untuk Profesional & Startup',
      en: 'Day 19: AI Productivity Stack for Professionals & Startups',
    },
    category: { id: 'Produktivitas', en: 'Productivity' },
    description: {
      id: 'Integrasi kumpulan alat AI unggulan untuk riset, penulisan, desain, dan manajemen proyek.',
      en: 'Integrating top AI productivity tools for research, writing, design, and project management.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Membangun stack AI kustom', 'Mengukur ROI efisiensi kerja', 'Standarisasi SOP berbasis AI'],
      en: ['Building custom AI stack', 'Measuring work efficiency ROI', 'Standardizing AI-based SOPs'],
    },
    summaryContent: {
      id: 'Pilih dan padukan kombinasi software AI terbaik yang sesuai dengan kebutuhan harian tim Anda.',
      en: 'Select and orchestrate the best AI software combinations tailored to your team daily workflow.',
    },
    quiz: [
      {
        id: 1901,
        question: {
          id: 'Tujuan utama penyusunan AI Stack dalam perusahaan adalah...',
          en: 'The primary goal of organizing an AI Stack in a company is...',
        },
        options: {
          id: [
            'Meningkatkan kecepatan dan kualitas kerja tim dengan alat terintegrasi',
            'Menambah biaya berlangganan software secara acak',
            'Mengurangi jam tidur karyawan',
            'Mengganti jaringan komputer fisik',
          ],
          en: [
            'Enhance team work speed and quality with integrated tools',
            'Randomly increase software subscription costs',
            'Reduce employee sleep hours',
            'Replace physical computer hardware',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'AI Stack yang padu memangkas redundansi dan mempercepat proses eksekusi antar divisi.',
          en: 'A cohesive AI Stack eliminates redundancy and accelerates execution across divisions.',
        },
      },
    ],
  },
  {
    day: 20,
    title: {
      id: 'Hari 20: Persiapan Capstone & Portofolio Karya AI',
      en: 'Day 20: Capstone Preparation & AI Portfolio Building',
    },
    category: { id: 'Portofolio', en: 'Portfolio' },
    description: {
      id: 'Merancang ide proyek nyata, menyusun dokumentasi teknis, dan menyiapkan materi presentasi.',
      en: 'Designing real-world project ideas, technical documentation, and presentation materials.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Formulasi masalah bisnis nyata', 'Pemilihan metode AI yang tepat', 'Penyusunan repositori portofolio'],
      en: ['Real business problem formulation', 'Selecting the right AI method', 'Building portfolio repositories'],
    },
    summaryContent: {
      id: 'Persiapan akhir fase Mandiri (Self-Paced). Seluruh peserta Tier 1 & Tier 2 merampungkan draf ide capstone.',
      en: 'Final prep for the Self-Paced phase. All Tier 1 & Tier 2 participants finalize capstone draft concepts.',
    },
    quiz: [
      {
        id: 2001,
        question: {
          id: 'Portofolio AI yang baik harus menunjukkan...',
          en: 'A good AI portfolio should demonstrate...',
        },
        options: {
          id: [
            'Solusi nyata terhadap masalah yang terukur serta dokumentasi proses',
            'Hanya sertifikat tanpa ada contoh hasil karya',
            'Kode program yang sengaja dibuat tidak bisa dijalankan',
            'Foto ruangan kantor saja',
          ],
          en: [
            'A real-world solution to a measurable problem and process documentation',
            'Only certificates without work samples',
            'Intentionally non-functional code',
            'Photos of office rooms only',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Perekrut dan klien menilai portofolio berbasis dampak nyata dan kejelasan dokumentasi.',
          en: 'Recruiters and clients evaluate portfolios based on tangible impact and documentation clarity.',
        },
      },
    ],
  },
  {
    day: 21,
    title: {
      id: 'Hari 21: Evaluasi Akhir Self-Paced & Klaim Certificate of Completion (21 JP)',
      en: 'Day 21: Self-Paced Final Evaluation & Certificate of Completion Claim (21 JP)',
    },
    category: { id: 'Sertifikasi Tier 1', en: 'Tier 1 Certification' },
    description: {
      id: 'Ujian komprehensif 21 hari self-paced. Lulusan Tier 1 berhak mengklaim Certificate of Completion (21 JP). Peserta Tier 2 melanjutkan ke sesi Mentoring Intensif 7 hari.',
      en: 'Comprehensive 21-day evaluation. Tier 1 graduates are eligible for Certificate of Completion (21 JP). Tier 2 students advance to 7-day Intensive Mentoring.',
    },
    durationJP: 1,
    tierRequired: 'tier1',
    isMentoring: false,
    learningObjectives: {
      id: ['Penyelesaian Ujian Komprehensif 21 JP', 'Klaim sertifikat digital dasar', 'Opsi Upsell ke Tier 2 Mentoring (Diskon Rp150rb)'],
      en: ['Completion of 21 JP Comprehensive Exam', 'Basic digital certificate claim', 'Tier 2 Mentoring Upsell Option (Rp150k off)'],
    },
    summaryContent: {
      id: 'Selamat! Anda menyelesaikan 21 hari pelatihan mandiri AI Navigator! Bagi pemegang Tier 1, sertifikat 21 JP Anda kini siap diunduh. Upgrade ke Tier 2 untuk sertifikasi internasional CAAI™ Level 1!',
      en: 'Congratulations! You completed 21 days of self-paced AI Navigator training! Tier 1 holders can now download their 21 JP certificate. Upgrade to Tier 2 for international CAAI™ Level 1 certification!',
    },
    quiz: [
      {
        id: 2101,
        question: {
          id: 'Berapa total Jam Pelajaran (JP) yang didapatkan peserta setelah lulus evaluasi Hari 21?',
          en: 'How many total Learning Hours (JP) do participants earn upon passing Day 21 evaluation?',
        },
        options: {
          id: ['21 JP', '5 JP', '100 JP', '0 JP'],
          en: ['21 JP', '5 JP', '100 JP', '0 JP'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Modul Self-Paced 21 Hari memberikan pengakuan beban belajar setara 21 Jam Pelajaran.',
          en: 'The 21-Day Self-Paced module grants accredited study load equivalent to 21 Learning Hours.',
        },
      },
    ],
  },
  // Days 22-28: Tier 2 Mentoring & CAAI Level 1 Certification (28 JP)
  {
    day: 22,
    title: {
      id: 'Hari 22: Sesi Mentoring 1-on-1 & Kickoff Capstone CAAI™ (Mentoring Day 1)',
      en: 'Day 22: 1-on-1 Mentoring & CAAI™ Capstone Kickoff (Mentoring Day 1)',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Sesi live interaktif via ai.maxy.academy bersama Mentor Industri. Reviu rancangan arsitektur proyek capstone Anda.',
      en: 'Live interactive session via ai.maxy.academy with Industry Mentors. Reviewing your capstone architecture draft.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Konsultasi ide proyek bersama mentor', 'Penyusunan jadwal sprint 7 hari', 'Akses ke AI Mentoring Portal ai.maxy.academy'],
      en: ['Project ideation consulting with mentor', '7-day sprint scheduling', 'Access to AI Mentoring Portal ai.maxy.academy'],
    },
    summaryContent: {
      id: 'Selamat datang di Fase Mentoring Intensif Tier 2! Di sesi ini, Anda dibimbing langsung oleh Pakar AI MAXY Academy untuk memastikan karya Anda memenuhi standar sertifikasi CAAI™ Level 1.',
      en: 'Welcome to Tier 2 Intensive Mentoring! In this session, you are guided directly by MAXY Academy AI Experts to ensure your work meets CAAI™ Level 1 certification standards.',
    },
    quiz: [
      {
        id: 2201,
        question: {
          id: 'Portal khusus yang digunakan untuk penjadwalan mentoring intensif AI Navigator adalah...',
          en: 'The dedicated portal used for intensive AI Navigator mentoring schedule is...',
        },
        options: {
          id: ['ai.maxy.academy', 'google.com', 'wikipedia.org', 'tiktok.com'],
          en: ['ai.maxy.academy', 'google.com', 'wikipedia.org', 'tiktok.com'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Sesuai arsitektur sistem, bagian mentoring diintegrasikan langsung dari ai.maxy.academy ke navigator.maxy.academy.',
          en: 'Per system architecture, mentoring is integrated seamlessly from ai.maxy.academy to navigator.maxy.academy.',
        },
      },
    ],
  },
  {
    day: 23,
    title: {
      id: 'Hari 23: Mentoring 2: Fine-Tuning & Prompt Optimization Review',
      en: 'Day 23: Mentoring 2: Fine-Tuning & Prompt Optimization Review',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Bedah kasus langsung bersama mentor: Optimasi performa model AI dan validasi akurasi sistem Anda.',
      en: 'Hands-on case review with mentors: AI model performance optimization and system accuracy validation.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Review prompt engineering proyek', 'Optimasi respon & token latency', 'Penyempurnaan dataset kustom'],
      en: ['Project prompt engineering review', 'Response & token latency optimization', 'Custom dataset refinement'],
    },
    summaryContent: {
      id: 'Mentor memberikan umpan balik langsung terhadap prompt dan pipeline yang Anda bangun agar bebas kesalahan.',
      en: 'Mentors provide direct feedback on your prompts and pipelines to make them bulletproof.',
    },
    quiz: [
      {
        id: 2301,
        question: {
          id: 'Latency token pada respon AI merujuk pada...',
          en: 'Token latency in AI responses refers to...',
        },
        options: {
          id: ['Waktu yang dibutuhkan AI untuk menghasilkan setiap kata/token', 'Ukuran font pada layar', 'Harga jual laptop', 'Jumlah kuis yang diselesaikan'],
          en: ['Time taken by AI to generate each word/token', 'Font size on screen', 'Laptop retail price', 'Number of completed quizzes'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Optimasi latency sangat penting agar sistem AI interaktif terasa cepat dan responsif bagi pengguna.',
          en: 'Latency optimization ensures interactive AI systems feel fast and responsive to users.',
        },
      },
    ],
  },
  {
    day: 24,
    title: {
      id: 'Hari 24: Mentoring 3: Integrasi API & Keamanan Sistem AI',
      en: 'Day 24: Mentoring 3: API Integration & AI System Security',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Integrasi backend, proteksi kunci API server-side, dan pengujian keandalan aplikasi.',
      en: 'Backend integration, server-side API key protection, and application robustness testing.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Deployment aman tanpa exposing secrets', 'Pengujian error handling API', 'Konfigurasi webhook real-time'],
      en: ['Secure deployment without exposing secrets', 'API error handling testing', 'Real-time webhook configuration'],
    },
    summaryContent: {
      id: 'Pastikan kunci rahasia API Anda tersimpan aman di server-side sebelum meluncurkan proyek ke publik.',
      en: 'Ensure secret API keys are stored securely server-side before launching your project to the public.',
    },
    quiz: [
      {
        id: 2401,
        question: {
          id: 'Mengapa API key tidak boleh ditaruh di kode client-side (browser)?',
          en: 'Why should API keys never be placed in client-side (browser) code?',
        },
        options: {
          id: [
            'API key dapat dicuri siapapun lewat DevTools browser dan disalahgunakan',
            'Warna website akan berubah jadi hitam',
            'Browser akan otomatis tertutup',
            'Tidak ada dampaknya',
          ],
          en: [
            'API keys can be stolen by anyone via browser DevTools and abused',
            'Website turns black',
            'Browser closes automatically',
            'No impact',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Praktik keamanan mewajibkan penggunaan server-side proxy untuk melindungi kunci rahasia.',
          en: 'Security best practices require server-side proxies to safeguard secret keys.',
        },
      },
    ],
  },
  {
    day: 25,
    title: {
      id: 'Hari 25: Mentoring 4: UI/UX & User Testing Proyek AI',
      en: 'Day 25: Mentoring 4: UI/UX & User Testing for AI Projects',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Memastikan antarmuka aplikasi AI intuitif, bebas hambatan, dan memberikan umpan balik visual yang jelas.',
      en: 'Ensuring AI app interfaces are intuitive, frictionless, and provide clear visual feedback.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Prinsip desain antarmuka AI', 'Penanganan indikator loading & streaming', 'Usability testing dengan pengguna'],
      en: ['AI interface design principles', 'Handling streaming & loading indicators', 'Usability testing with users'],
    },
    summaryContent: {
      id: 'Aplikasi AI hebat harus didukung antarmuka pengguna yang ramah dan mudah digunakan siapa saja.',
      en: 'A great AI application must be backed by a friendly, accessible user interface for everyone.',
    },
    quiz: [
      {
        id: 2501,
        question: {
          id: 'Saat AI membutuhkan waktu memproses respon, antarmuka yang baik harus menyajikan...',
          en: 'When AI takes time to process a response, a good interface must provide...',
        },
        options: {
          id: [
            'Indikator loading/skeleton/streaming teks yang jelas',
            'Layar kosong tanpa tanda apapun',
            'Pesan error mendadak',
            'Iklan pop-up',
          ],
          en: [
            'Clear loading indicator/skeleton/text streaming',
            'Blank screen without any sign',
            'Sudden error message',
            'Pop-up ads',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Visual feedback mengurangi kecemasan pengguna saat menunggu AI memproses data.',
          en: 'Visual feedback reduces user anxiety while waiting for AI data processing.',
        },
      },
    ],
  },
  {
    day: 26,
    title: {
      id: 'Hari 26: Mentoring 5: Pitching & Presentasi Dampak Proyek',
      en: 'Day 26: Mentoring 5: Pitching & Project Impact Presentation',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Teknik menyajikan proyek AI Anda di depan penguji, atasan, atau calon investor secara persuasif.',
      en: 'Persuasive presentation techniques for showcasing your AI project to judges, bosses, or investors.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Penyusunan slide deck 5 menit', 'Demonstrasi produk live tanpa lag', 'Menjawab pertanyaan teknis penguji'],
      en: ['5-minute slide deck creation', 'Live product demo without lag', 'Answering technical judge questions'],
    },
    summaryContent: {
      id: 'Sampaikan nilai dampak solusi AI Anda secara singkat, padat, dan didukung metrik yang jelas.',
      en: 'Communicate your AI solution value concisely backed by clear impact metrics.',
    },
    quiz: [
      {
        id: 2601,
        question: {
          id: 'Kunci utama saat melakukan live demo aplikasi AI adalah...',
          en: 'The key factor during a live AI application demo is...',
        },
        options: {
          id: [
            'Menyiapkan fallback data/rekaman cadangan jika jaringan terkendala',
            'Berbicara selambat mungkin',
            'Tidak menunjukkan cara kerja aplikasi',
            'Membaca seluruh slide kata demi kata',
          ],
          en: [
            'Preparing backup fallback data/recording in case of network issues',
            'Speaking as slow as possible',
            'Not showing how the app works',
            'Reading all slides word for word',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Persiapan fallback memastikan presentasi tetap berjalan lancar meski terjadi hambatan sinyal.',
          en: 'Fallback preparation ensures seamless presentation despite potential connectivity glitches.',
        },
      },
    ],
  },
  {
    day: 27,
    title: {
      id: 'Hari 27: Pengumpulan Akhir Capstone Project & Peer Review',
      en: 'Day 27: Capstone Project Final Submission & Peer Review',
    },
    category: { id: 'Mentoring Tier 2', en: 'Tier 2 Mentoring' },
    description: {
      id: 'Wajib submit repositori / link dokumen proyek akhir ke sistem untuk dinilai oleh Dewan Mentor MAXY.',
      en: 'Mandatory final submission of project repository / document link for evaluation by MAXY Mentor Board.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    requiresProjectSubmission: true,
    learningObjectives: {
      id: ['Submit link proyek capstone', 'Peer review antar peserta', 'Verifikasi kriteria kelulusan CAAI™'],
      en: ['Submit capstone project link', 'Peer review between students', 'Verify CAAI™ graduation criteria'],
    },
    summaryContent: {
      id: 'Pengumpulan wajib proyek akhir! Tim Mentor MAXY Academy menilai aspek inovasi, fungsionalitas, etika, dan nilai guna bisnis.',
      en: 'Mandatory final project submission! MAXY Academy Mentor Board evaluates innovation, functionality, ethics, and business value.',
    },
    quiz: [
      {
        id: 2701,
        question: {
          id: 'Apakah submission capstone project wajib untuk mendapatkan Sertifikat CAAI™ Level 1?',
          en: 'Is capstone project submission mandatory to obtain the CAAI™ Level 1 Certificate?',
        },
        options: {
          id: [
            'Ya, wajib submit dan dinyatakan lulus oleh mentor',
            'Tidak, cukup daftar saja',
            'Opsional bagi yang ingin saja',
            'Hanya jika penguji ingat',
          ],
          en: [
            'Yes, mandatory submission and approval by mentor',
            'No, just signing up is enough',
            'Optional for interested participants',
            'Only if judges remember',
          ],
        },
        correctIndex: 0,
        explanation: {
          id: 'Penilaian proyek nyata menjamin kualitas dan kredibilitas tinggi lulusan CAAI™ Level 1.',
          en: 'Real project assessment guarantees high standards and credibility for CAAI™ Level 1 graduates.',
        },
      },
    ],
  },
  {
    day: 28,
    title: {
      id: 'Hari 28: Sidang Kelulusan, Badge Digital, & Terhubung ke Accredify (28 JP)',
      en: 'Day 28: Graduation, Digital Badges, & Accredify Verification Link (28 JP)',
    },
    category: { id: 'Sertifikasi CAAI™', en: 'CAAI™ Certification' },
    description: {
      id: 'Hari Puncak Kelulusan! Pengumuman kelulusan CAAI™ Level 1 (28 JP), penerbitan sertifikat digital berstempel resmi terverifikasi Accredify, dan pembagian Badges.',
      en: 'Graduation Peak Day! Announcement of CAAI™ Level 1 (28 JP) completion, officially stamped Accredify verified credentials, and Digital Badges issuance.',
    },
    durationJP: 1,
    tierRequired: 'tier2',
    isMentoring: true,
    learningObjectives: {
      id: ['Penerbitan Sertifikat CAAI™ Level 1 (28 JP)', 'Verifikasi blockchain via Accredify', 'Klaim Badge Digital di LinkedIn'],
      en: ['Issuance of CAAI™ Level 1 Certificate (28 JP)', 'Blockchain verification via Accredify', 'LinkedIn Digital Badge claim'],
    },
    summaryContent: {
      id: 'Selamat! Anda resmi menjadi Certified Applied AI Specialist (CAAI™ Level 1) berakreditasi 28 JP! Sertifikat terverifikasi terhubung langsung dengan sistem Accredify untuk validasi autentik secara global.',
      en: 'Congratulations! You are officially a Certified Applied AI Specialist (CAAI™ Level 1) with 28 JP accreditation! Your verified credential links directly with Accredify for global authentic verification.',
    },
    quiz: [
      {
        id: 2801,
        question: {
          id: 'Layanan terverifikasi yang digunakan AI Navigator MAXY Academy untuk penerbitan sertifikat resmi adalah...',
          en: 'The verified service used by AI Navigator MAXY Academy for official certificate issuance is...',
        },
        options: {
          id: ['Accredify', 'Paint.exe', 'Notepad', 'Excel 2003'],
          en: ['Accredify', 'Paint.exe', 'Notepad', 'Excel 2003'],
        },
        correctIndex: 0,
        explanation: {
          id: 'Integrasi Accredify memberikan verifikasi kriptografis anti-pemalsuan bagi seluruh lulusan sertifikasi.',
          en: 'Accredify integration provides tamper-proof cryptographic verification for all certification graduates.',
        },
      },
    ],
  },
];

export const INITIAL_COUPONS: CouponCode[] = [
  {
    code: 'BEASISWAMAXI',
    discountAmount: 50000,
    targetTier: 'tier1',
    isFreePass: true,
    description: {
      id: 'Beasiswa TikTok Daily MAXY — Gratis 100% untuk Tier 1 (Rp50.000 -> Rp0)',
      en: 'TikTok Daily MAXY Scholarship — 100% Free for Tier 1 (Rp50,000 -> Rp0)',
    },
  },
  {
    code: 'TIKTOKUPSELL',
    discountAmount: 150000,
    targetTier: 'tier2',
    description: {
      id: 'Voucher Spesial TikTok Followers — Potongan Rp150.000 untuk Tier 2 (Rp300.000 -> Rp150.000)',
      en: 'Special TikTok Followers Voucher — Rp150,000 Off for Tier 2 (Rp300,000 -> Rp150,000)',
    },
  },
  {
    code: 'TIKTOK10K',
    discountAmount: 150000,
    targetTier: 'tier2',
    description: {
      id: 'Kampanye 10K Follower TikTok — Potongan Rp150.000 Tier 2 CAAI™',
      en: '10K TikTok Follower Campaign — Rp150,000 Off Tier 2 CAAI™',
    },
  },
  {
    code: 'IDEAFEST50',
    discountAmount: 50000,
    targetTier: 'all',
    isFreePass: true,
    description: {
      id: 'Klaim Pengunjung Booth Event IdeaFest / DTICX — 50 Pengunjung Pertama Gratis Tier 1',
      en: 'IdeaFest / DTICX Booth Visitor Claim — First 50 Visitors Free Tier 1',
    },
  },
  {
    code: 'DTICXBOOTH',
    discountAmount: 150000,
    targetTier: 'tier2',
    description: {
      id: 'Voucher Spesial Booth DTICX MAXY — Potongan Rp150.000 Tier 2 Mentoring',
      en: 'DTICX MAXY Booth Special Voucher — Rp150,000 Off Tier 2 Mentoring',
    },
  },
];
