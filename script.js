const navLinks = document.querySelectorAll('.navbar a, [data-page]');
        const sections = document.querySelectorAll('.section');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navLinks');
        const sendWhatsApp = document.getElementById('sendWhatsApp');
        const contactForm = document.getElementById('contactForm');

        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                const page = link.getAttribute('data-page');
                if (page) {
                    sections.forEach(section => section.classList.remove('active'));
                    document.getElementById(page).classList.add('active');
                }
                navMenu.classList.remove('active');
            });
        });

        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

        sendWhatsApp.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const location = document.getElementById('eventLocation').value;
            const message = document.getElementById('message').value;
          
            if (!name || !phone || !location || !message) {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Por favor, preencha todos os campos obrigatórios!'
                });
                return; // Interrompe a função se algum campo estiver vazio
  
              }
            
            const whatsappMessage = `
                Olá, familia "SPP" temos um evento! 
                ----------------------------------------------

                Dados do contratante:
                Nome: ${name}
                Telefone: ${phone}
                Endereço do Evento: ${location}

                ----------------------------------------------
                Assunto: ${message}
                
            `;

            window.open(`https://api.whatsapp.com/send?phone=5581982523361&text=${encodeURIComponent(whatsappMessage)}`);
            
            // Limpa o formulário após o envio
            contactForm.reset();
        });