
// 菜单与年份
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
if (menuBtn){
  menuBtn.addEventListener('click', ()=> {
    const nav = document.querySelector('.main-nav');
    if(!nav) return;
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
  });
}

// 表单：若未配置真实后端，则阻止提交并提示
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e)=>{
    const action = form.getAttribute('action') || '';
    if (!action || action.includes('your-id')){
      e.preventDefault();
      alert('演示表单：请在 contact.html 中把 action 替换为你的 Formspree 或后端地址后再上线。');
    }
  });
}

// 图片将优先加载 .jpg，失败时回退到 .svg（见各 <img> 的 onerror 属性）
