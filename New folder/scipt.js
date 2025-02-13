// نمایش فرم ثبت‌نام
function showSignup() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// نمایش فرم ورود
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

// عملکرد ثبت‌نام
function signup() {
    const name = document.getElementById('signupName').value;
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !username || !email || !password) {
        alert('لطفاً تمام فیلدها را پر کنید');
        return;
    }

    // ذخیره اطلاعات در دیتابیس یا سیستم‌های مشابه

    // پس از ثبت‌نام موفق، به صفحه مقالات هدایت می‌شود
    alert('ثبت‌نام موفقیت‌آمیز بود');
    window.location.replace('articles.html');  // به صفحه مقالات هدایت می‌شود
}

// عملکرد ورود
function login() {
    const usernameEmail = document.getElementById('loginUsernameEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!usernameEmail || !password) {
        alert('لطفاً تمام فیلدها را پر کنید');
        return;
    }

    // پردازش ورود (اعتبارسنجی اطلاعات ورود)

    // پس از ورود موفق، به صفحه مقالات هدایت می‌شود
    alert('ورود موفقیت‌آمیز بود');
    window.location.replace('articles.html');  // به صفحه مقالات هدایت می‌شود
}
// Profile Edit
function editProfile() {
    alert("ویرایش پروفایل");
}

// Show Notifications
function showNotifications() {
    document.getElementById('notificationsContainer').style.display = 'block';
}

// Create Post
function previewMedia() {
    const mediaFile = document.getElementById('postMedia').files[0];
    if (mediaFile) {
        alert("پیش‌نمایش رسانه");
    }
}

function submitPost() {
    const caption = document.getElementById('postCaption').value;
    const media = document.getElementById('postMedia').files[0];
    if (!caption || !media) {
        alert("لطفاً رسانه و کپشن را وارد کنید");
        return;
    }
    alert("پست شما ارسال شد!");
}

// Explore
function showExplore() {
    document.getElementById('exploreContainer').style.display = 'block';
}

// Settings
function submitSettings() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const privacy = document.getElementById('privacy').value;
    alert(`تنظیمات ذخیره شدند:
           نام کاربری: ${username}
           ایمیل: ${email}
           حریم خصوصی: ${privacy}`);
}
