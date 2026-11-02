import React from 'react';

const maps = 'https://maps.app.goo.gl/NUr8WjeFfxFSNAVRA';

export default function SchoolInfo() {
  return <section className="school-info wrap" id="visita" aria-labelledby="school-info-title">
    <span className="eyebrow">ENCONTRE A NOSSA ESCOLA EM PATOS</span>
    <h2 id="school-info-title">Uma escola para conhecer <em>de perto.</em></h2>
    <p>O Centro Educacional Estrela Dalva é uma escola particular em Patos, Paraíba. Recebemos famílias interessadas na Educação Infantil e no Ensino Fundamental I, do 1º ao 5º ano.</p>
    <div className="school-info-grid">
      <div>
        <h3>Onde estamos</h3>
        <address>Rua Hildo Menezes, 557<br/>Bela Vista · Patos, PB · CEP 58704-540</address>
        <p><a className="textlink" href={maps} target="_blank" rel="noopener noreferrer">Como chegar pelo Google Maps ↗</a></p>
      </div>
      <div>
        <h3>Fale com a escola</h3>
        <p><a className="textlink" href="tel:+5583996907686">(83) 99690-7686</a><br/><a className="textlink" href="mailto:centroeducacionalestreladalva@gmail.com">Enviar e-mail</a></p>
        <p>Para conhecer os horários, a disponibilidade de vagas e as etapas de matrícula, converse com nossa equipe.</p>
      </div>
    </div>
    <div className="school-questions">
      <h3>Dúvidas frequentes das famílias</h3>
      <details><summary>Quais turmas a Estrela Dalva oferece?</summary><p>Na Educação Infantil: Maternalzinho, Maternal, Jardim I e Jardim II. No Ensino Fundamental I: do 1º ao 5º ano.</p></details>
      <details><summary>A escola oferece aulas extras?</summary><p>Sim. As atividades extras incluem natação, balé e judô. Consulte a escola sobre horários e disponibilidade.</p></details>
      <details><summary>Como faço a pré-matrícula?</summary><p>Preencha o <a href="#matricula">formulário de pré-matrícula</a> nesta página. Nossa equipe entrará em contato para orientar sua família. O preenchimento demonstra interesse e não garante vaga.</p></details>
      <details><summary>Posso visitar a escola antes de decidir?</summary><p>Sim. <a href="https://wa.me/5583996907686?text=Ol%C3%A1%21%20Gostaria%20de%20combinar%20uma%20visita%20%C3%A0%20escola.">Combine uma visita pelo WhatsApp</a> para conhecer os espaços e conversar com a equipe.</p></details>
    </div>
  </section>;
}
