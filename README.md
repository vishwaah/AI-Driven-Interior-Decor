# 🧠 DecorCraft – AI-Driven Interior Decor Generator

**DecorCraft** is a web-based application that leverages Generative AI to help users visualize customized interior designs. By uploading a photo of a room and selecting a preferred style, users can generate culturally aware and aesthetically refined design layouts using Stable Diffusion models fine-tuned with LoRA and enhanced via ControlNet.

---

## 🚀 Features

- Upload a room image and choose design preferences
- Generate AI-based interior designs in seconds
- View, compare, and download the output
- Responsive UI built with modern web technologies
- Hosted AI model on Replicate, image storage via ByteScale

---

## 🛠️ Tech Stack

| Layer        | Technologies Used                                          |
|--------------|------------------------------------------------------------|
| Frontend     | TypeScript, Next.js (App Router), Tailwind CSS             |
| AI Model     | Stable Diffusion, LoRA, ControlNet                         |
| Backend/API  | Replicate API (model inference), ByteScale API (uploads)  |
| Tools Used   | Auto1111, ComfyUI, KhoyaSS (for training and testing)      |
| Hosting      | Replicate (Model), ByteScale (Storage) |

---


## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/decorcraft.git
cd decorcraft
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add:

```env
REPLICATE_API_TOKEN=your_replicate_api_key
BYTESCALE_PUBLIC_KEY=your_bytescale_api_key
```

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to use the app locally.

---

## ⚙️ Model Deployment

- The LoRA fine-tuned Stable Diffusion model is hosted on [Replicate](https://replicate.com/).
- ControlNet integration enhances structural consistency based on room layout.
- Image uploads are securely handled via [ByteScale](https://www.bytescale.com/).

---

## ✅ Functional Requirements

- Upload image and receive AI-generated output
- Choose room type and style
- Compare input and output
- Download final design image

## 🔐 Non-Functional Requirements

- Responsive and accessible UI
- Secure API key and data handling
- Average generation time: < 20 seconds
- Scalable for multi-user access

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Acknowledgements

- [Replicate](https://replicate.com/)
- [ByteScale](https://www.bytescale.com/)
- [Stable Diffusion by CompVis](https://github.com/CompVis/stable-diffusion)
- [ControlNet](https://github.com/lllyasviel/ControlNet)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Auto1111 Web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

---

> 🌐 **DecorCraft** – Redefining interior design through AI ✨
