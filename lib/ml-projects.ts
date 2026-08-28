export type MlProject = {
  slug: string;
  title: string;
  typeLabel: string;
  context: string;
  status?: string;
  description: string;
  results: string[];
  tech: string[];
  link?: { label: string; url: string };
};

export const mlProjects: MlProject[] = [
  {
    slug: "concord",
    title: "Concord — Expert Matching Platform",
    typeLabel: "Production System · NLP · Semantic Search",
    context: "The College Collective (KWP Ltd) · sole engineer",
    status: "Live in production",
    description:
      "Production platform for The College Collective, replacing a manual spreadsheet process for matching support requests from Further Education colleges to industry experts across 37 capability areas in 7 categories. The ML layer is a FastAPI microservice serving SBERT (all-MiniLM-L6-v2) embeddings combined with TF-IDF cosine similarity and categorical overlap scoring to produce a ranked shortlist of candidate experts per support request. The application layer is a React / TypeScript / Express / PostgreSQL Nx monorepo on Render, with Resend transactional email, a pg-boss job queue, and Sentry + LogRocket observability.",
    results: [
      "37-label capability taxonomy across 7 categories",
      "Three-signal ranking: SBERT + TF-IDF + categorical overlap",
      "Live at app.collegecollective.co.uk",
    ],
    tech: [
      "Python",
      "FastAPI",
      "SBERT (all-MiniLM-L6-v2)",
      "TF-IDF",
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Kysely",
      "Nx monorepo",
      "pg-boss",
      "Resend",
      "Sentry",
      "LogRocket",
    ],
    link: { label: "Live app", url: "https://app.collegecollective.co.uk" },
  },
  {
    slug: "dissertation",
    title: "Intelligent Matching System for the College Collective",
    typeLabel: "MSc Dissertation · NLP · Information Retrieval",
    context: "MSc Artificial Intelligence, University of Salford",
    status: "Submitted July 2026",
    description:
      "Research and prototype automating the candidate-identification stage of the College Collective's expert matching. Three complementary signals — categorical overlap over a 37-label taxonomy, TF-IDF cosine similarity over free-text descriptions, and semantic similarity via Sentence-BERT — are combined into a single ranked list, evaluated against 320 historical matching decisions from four years of programme data. Substantial effort went into an honest evaluation baseline: five sequential data-quality and pipeline-integrity bugs were identified and documented with before/after metric impact, including a request-identity collision, an empty-text SBERT artefact, and inconsistent ground truth.",
    results: [
      "Precision@3: 22.50%",
      "Precision@10: 48.44%",
      "Mean Reciprocal Rank: 0.186",
      "Where the correct expert is in the top 10 (48.4% of requests), median rank is 4",
    ],
    tech: [
      "Python",
      "Sentence-BERT",
      "TF-IDF",
      "scikit-learn",
      "pandas",
      "NumPy",
      "FastAPI",
      "React",
    ],
  },
  {
    slug: "pidgin-sentiment",
    title: "Sentiment Classification of Nigerian Pidgin English Tweets",
    typeLabel: "NLP · Text Classification · Embedding Strategies",
    context: "Natural Language Processing module, MSc AI, University of Salford",
    status: "Submitted April 2026",
    description:
      "Comparative study of three TensorFlow embedding strategies for sentiment classification of a low-resource creole corpus: a trainable token-based embedding, NNLM-50, and NNLM-128 with text normalisation, on the NaijaSenti Pidgin English dataset (10,556 tweets; positive / neutral / negative). Class imbalance was handled with class weights and stratified re-splitting. The central finding is that a trainable embedding learned from the target corpus outperforms both pre-trained NNLM models — a domain mismatch between Google News-trained NNLMs and informal creole-register Twitter text. NNLM-128's punctuation normalisation reduces the OOV rate and partially mitigates this.",
    results: [
      "Trainable embedding: weighted F1 0.72, accuracy 0.73 (best)",
      "NNLM-128 + normalisation: weighted F1 0.69",
      "NNLM-50: weighted F1 0.64",
      "Domain-specific embeddings beat general-purpose pre-trained ones for low-resource creole languages",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "TensorFlow Hub",
      "HuggingFace Datasets",
      "scikit-learn",
      "pandas",
    ],
  },
  {
    slug: "ai-news-topics",
    title: "Exploring Thematic Structures in AI News Using Topic Modelling",
    typeLabel: "NLP · Unsupervised Learning · Topic Modelling",
    context: "Natural Language Processing module, MSc AI, University of Salford",
    status: "Submitted April 2026",
    description:
      "Applied LDA and NMF to a self-collected corpus of global news covering artificial intelligence, identifying latent thematic structure and comparing both models qualitatively and quantitatively. Grid search over coherence (LDA) and reconstruction error (NMF) selected K. NMF produces sharper, more lexically distinct topics (e.g. surfacing “anthropic, openai, chatgpt, claude” in a company-research topic); LDA shows more word-level mixing but richer probabilistic outputs suited to downstream tasks such as document routing. Per-topic interactive pyLDAvis visualisations were generated.",
    results: [
      "LDA: K = 10, coherence 0.5273",
      "NMF: K = 10, reconstruction error 28.70",
      "~4 of 10 topic pairs near-equivalent across both models (cross-model validation)",
      "NMF dramatically faster for grid search — seconds vs minutes",
    ],
    tech: [
      "Python",
      "scikit-learn",
      "Gensim",
      "pyLDAvis",
      "NLTK",
      "pandas",
      "matplotlib",
    ],
  },
  {
    slug: "plastic-classification",
    title: "Classifying Plastics Using Transfer Learning — MobileNetV2 vs InceptionV3",
    typeLabel: "Computer Vision · Image Classification · Transfer Learning",
    context: "Deep Learning & Neural Networks module, MSc AI, University of Salford",
    status: "Submitted December 2025 · companion to the YOLO study",
    description:
      "Comparative study of two transfer-learning architectures for plastic-type classification (HDPE and PET) on a self-collected image dataset. Images were gathered, labelled, and fine-tuned on both MobileNetV2 and InceptionV3 with TensorFlow/Keras. The small dataset (163 training, 71 validation) was a genuine constraint — both models learned but with inconsistent training curves. MobileNetV2 outperformed InceptionV3 on precision, recall, and F1 for both classes. The report analyses why the task is hard — plastics differ mainly by texture and transparency — and proposes concrete data-collection changes.",
    results: [
      "MobileNetV2 outperforms InceptionV3 across all metrics",
      "Both models: ≥ 70% training accuracy initially, ≥ 80% after fine-tuning",
      "Trained on Google Colab (GPU) and locally on Apple Silicon",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "InceptionV3",
      "matplotlib",
      "Google Colab",
    ],
  },
  {
    slug: "plastic-detection",
    title: "Detecting Plastic Types Using YOLOv8 and YOLOv9",
    typeLabel: "Computer Vision · Object Detection · YOLO",
    context: "Deep Learning & Neural Networks module, MSc AI, University of Salford",
    status: "Submitted December 2025 · companion to the transfer-learning study",
    description:
      "Trained and compared YOLOv8 and YOLOv9 on a self-annotated dataset for detecting HDPE, PET, and PP with bounding boxes, over 50 epochs. Both showed consistent training-loss reduction but volatile validation metrics, consistent with limited data. YOLOv8 behaves conservatively — higher precision, fewer but cleaner detections; YOLOv9 is more aggressive with noisier predictions. Confusion-matrix analysis identified PET and PP as the most confused classes, with background misclassification the dominant failure mode for both — a shared data-quality issue rather than a model-specific one.",
    results: [
      "YOLOv8: mAP@0.5 0.3364, precision 0.5964, recall 0.3263",
      "YOLOv9: mAP@0.5 0.2669, precision 0.3594, recall 0.3292",
      "~4–5 minutes training per model (50 epochs, Google Colab)",
      "YOLOv8 recommended for production: better precision, faster per epoch",
    ],
    tech: [
      "Python",
      "Ultralytics YOLOv8",
      "YOLOv9",
      "OpenCV",
      "Google Colab",
      "Roboflow",
    ],
  },
];
