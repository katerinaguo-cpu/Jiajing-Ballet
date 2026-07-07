const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('#contactForm');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name');
  const level = data.get('level');
  const program = data.get('program');
  const contact = data.get('contact');

  const subject = encodeURIComponent(`JIAJING BALLET 体验课咨询 - ${name}`);
  const body = encodeURIComponent(
`你好，JIAJING BALLET：

我想咨询体验课。

姓名：${name}
年龄与基础：${level}
想咨询的课程：${program}
联系方式：${contact}

谢谢。`
  );

  window.location.href = `mailto:katerinaguo@gmail.com?subject=${subject}&body=${body}`;
});
