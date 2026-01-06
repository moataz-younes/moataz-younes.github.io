# 🚀 رفع سريع على GitHub Pages

## الخطوات السريعة (5 دقائق)

### 1️⃣ إنشاء Repository على GitHub
- اذهب إلى GitHub.com وأنشئ repository جديد باسم: `Cybersecurity-Mentor-Consultant`
- **مهم**: اختر **Public** (مطلوب لـ GitHub Pages)

### 2️⃣ ربط المشروع بـ GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/Cybersecurity-Mentor-Consultant.git
git branch -M main
git push -u origin main
```
**استبدل `YOUR_USERNAME` باسمك على GitHub**

### 3️⃣ تثبيت المكتبات
```bash
npm install
```

### 4️⃣ رفع المشروع
```bash
npm run deploy
```

### 5️⃣ تفعيل GitHub Pages
1. اذهب إلى repository على GitHub
2. **Settings** > **Pages**
3. Source: **Deploy from a branch**
4. Branch: **gh-pages**
5. اضغط **Save**

### 6️⃣ انتظر 2-5 دقائق
ثم افتح الرابط:
```
https://YOUR_USERNAME.github.io/Cybersecurity-Mentor-Consultant/
```

---

## 🔄 تحديث الموقع بعد التعديلات

```bash
git add .
git commit -m "تحديثات"
git push origin main
npm run deploy
```

---

## ⚠️ مشاكل شائعة

**خطأ 404؟**
- تأكد من أن اسم repository يطابق `Cybersecurity-Mentor-Consultant` بالضبط

**الصور لا تظهر؟**
- تأكد من وجود ملف `.nojekyll` في `client/public/`

**خطأ في deploy؟**
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📖 للتفاصيل الكاملة
اقرأ ملف `DEPLOY_ARABIC.md` للتعليمات التفصيلية

