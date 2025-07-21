// app/resume/data/projects.js
export const projects = [
  {
    id: 1,
    slug: "deteksi-aglonema",
    title: "Deteksi Jenis Aglonema",
    description:
      "Aplikasi ini merupakan sebuah sistem berbasis kecerdasan buatan yang dirancang khusus untuk mendeteksi dan mengklasifikasikan jenis tanaman hias Aglonema secara otomatis dengan menggunakan teknologi Convolutional Neural Network (CNN). Sistem ini dikembangkan untuk membantu para pecinta tanaman, petani, kolektor, maupun pelaku bisnis tanaman hias dalam mengenali jenis-jenis aglonema dengan cepat, akurat, dan praktis, tanpa harus memiliki pengetahuan botani mendalam.",
    image: "/image/projects/cnndeteksi.png",
    techStack: [
      "Python",
      "Computer Vision",
      "Convolutional Neural Network",
      "Deep Learning",
      "TensorFlow",
      "Android Studio",
    ],
    features: [
      "Deteksi Objek",
      "Mendeteksi Jenis Tanaman Aglonema",
      "Mengklasifikasi Jenis - Jenis Aglonema",
      "Menampilkan Jenis Aglonema yang di Deteksi",
      "Menampilkan Akurasi Deteksi",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    slug: "konversi-ktp-to-text",
    title: "Konversi KTP to Text",
    description:
      "Aplikasi ini merupakan sebuah sistem berbasis Optical Character Recognition (OCR) yang dirancang untuk mengonversi gambar KTP (Kartu Tanda Penduduk) menjadi data teks terstruktur secara otomatis, kemudian menyimpannya dalam format file Excel (.xlsx). Aplikasi ini ditujukan untuk mempermudah proses pendataan identitas penduduk dari dokumen cetak, yang selama ini dilakukan secara manual, menjadi cepat, efisien, dan minim kesalahan.",
    image: "/projects/aritmatika.jpg",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["Python", "JavaScript", "OCR", "Android Studio"],
    features: [
      "Convert Poto dari KTP ke Text",
      "Membuat list Anggota otomatis",
      "Image Labeling",
      "Image Detection",
    ],
  },
  {
    id: 3,
    slug: "stok-barang",
    title: "Website Stok Barang",
    description: "Program penyelesaian soal matematika...",
    image: "/projects/aritmatika.jpg",
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["Python", "Algorithm"],
    features: ["Menghitung suku ke-n", "Menentukan beda barisan"],
  },
  // ... tambahkan proyek lain jika ada
];

export default projects;
