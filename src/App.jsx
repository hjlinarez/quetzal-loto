import React, { useEffect } from "react";

const historyRows = [
  ["#120", "12/05/2026", "1:00 PM", "632", "32"],
  ["#119", "12/05/2026", "11:00 AM", "517", "17"],
  ["#118", "11/05/2026", "8:45 PM", "901", "01"],
  ["#117", "11/05/2026", "4:30 PM", "428", "28"],
  ["#116", "11/05/2026", "11:00 AM", "184", "84"],
  ["#115", "10/05/2026", "1:00 PM", "763", "63"],
  ["#114", "10/05/2026", "4:30 PM", "245", "45"],
  ["#113", "10/05/2026", "8:45 PM", "390", "90"],
  ["#112", "09/05/2026", "11:00 AM", "821", "21"],
  ["#111", "09/05/2026", "1:00 PM", "406", "06"],
  ["#110", "09/05/2026", "4:30 PM", "155", "55"],
  ["#109", "09/05/2026", "8:45 PM", "672", "72"],
  ["#108", "08/05/2026", "11:00 AM", "248", "48"],
  ["#107", "08/05/2026", "1:00 PM", "734", "34"],
  ["#106", "08/05/2026", "4:30 PM", "582", "82"],
  ["#105", "08/05/2026", "8:45 PM", "319", "19"],
  ["#104", "07/05/2026", "11:00 AM", "660", "60"],
  ["#103", "07/05/2026", "1:00 PM", "274", "74"],
  ["#102", "07/05/2026", "4:30 PM", "489", "89"],
  ["#101", "07/05/2026", "8:45 PM", "138", "38"],
];

export default function App() {
  useEffect(() => {
    const navCollapseElement = document.querySelector("#mainNav");
    if (!navCollapseElement || !window.bootstrap) return;

    const navCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapseElement, {
      toggle: false,
    });

    const links = document.querySelectorAll("#mainNav .nav-link, #mainNav .btn");
    const onClick = () => {
      if (window.innerWidth < 992) navCollapse.hide();
    };

    links.forEach((link) => link.addEventListener("click", onClick));
    return () => links.forEach((link) => link.removeEventListener("click", onClick));
  }, []);

  return (
    <>
      <div className="top-strip py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center gap-3 text-center text-md-start">
            <span className="badge rounded-pill px-3 py-2">Resultados en vivo</span>
            <span>Triples, terminales y jugadas directas para el mercado de Guatemala</span>
          </div>
          <div className="d-flex align-items-center gap-3 small fw-semibold">
            <span>Atencion: 8:00 AM - 9:00 PM</span>
            <span>Pago rapido y seguro</span>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg sticky-top py-3">
        <div className="container">
          <a className="navbar-brand" href="#inicio" aria-label="Quetzal Loto">
            <img src="/assets/img/logo-quetzal-loto.svg" alt="Quetzal Loto" className="brand-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Alternar navegacion">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item"><a className="nav-link fw-semibold" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#resultados">Resultados</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#jugadas">Jugadas</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#loterias">Modalidades</a></li>
              <li className="nav-item"><a className="nav-link fw-semibold" href="#promociones">Promociones</a></li>
              <li className="nav-item"><a className="btn btn-warning px-4 ms-lg-2" href="#registrate">Abrir cuenta</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="inicio">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <div className="hero-card p-4 p-lg-5 h-100">
                  <span className="eyebrow mb-4">Tu centro de apuestas diarias en Guatemala</span>
                  <h1 className="hero-title mb-3">Una forma segura de ganar</h1>
                  <p className="hero-subtitle mb-4">Una portada pensada para loterias populares en Guatemala: resultados destacados, acceso rapido a jugadas, horarios visibles y una estructura clara para captar jugadores, agentes y bancas.</p>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <a href="#jugadas" className="btn btn-warning px-4">Jugar ahora</a>
                    <a href="#resultados" className="btn btn-outline-light px-4">Ver resultados</a>
                  </div>
                  <div className="row g-3">
                    <div className="col-sm-4"><div className="draw-chip h-100"><div className="small text-uppercase fw-bold opacity-75 mb-2">Triple destacado</div><div className="draw-number brand-font">428</div><div className="small opacity-75 mt-2">Sorteo 1:00 PM</div></div></div>
                    <div className="col-sm-4"><div className="draw-chip h-100"><div className="small text-uppercase fw-bold opacity-75 mb-2">Terminal del dia</div><div className="draw-number brand-font">17</div><div className="small opacity-75 mt-2">Pago especial</div></div></div>
                    <div className="col-sm-4"><div className="draw-chip h-100"><div className="small text-uppercase fw-bold opacity-75 mb-2">Premio tope</div><div className="draw-number brand-font">x70</div><div className="small opacity-75 mt-2">En triples directos</div></div></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="glass-card p-4 p-lg-4 h-100">
                  <div className="floating-badge mb-3">Panel rapido del dia</div>
                  <h2 className="h3 mb-3">Horarios y resultados activos</h2>
                  <div className="row g-3 mb-4">
                    <div className="col-6"><div className="border rounded-4 p-3 h-100 bg-white"><div className="small text-secondary fw-semibold">Manana</div><div className="fs-3 fw-bold text-primary">11:00</div><div className="small">Triple, terminal y pick</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 h-100 bg-white"><div className="small text-secondary fw-semibold">Tarde</div><div className="fs-3 fw-bold text-danger">1:00</div><div className="small">Sorteo principal</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 h-100 bg-white"><div className="small text-secondary fw-semibold">Vespertino</div><div className="fs-3 fw-bold text-warning">4:30</div><div className="small">Terminal plus</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 h-100 bg-white"><div className="small text-secondary fw-semibold">Noche</div><div className="fs-3 fw-bold text-ink">8:45</div><div className="small">Cierre y pago</div></div></div>
                  </div>
                  <div className="bg-white rounded-4 p-3 border">
                    <div className="d-flex justify-content-between align-items-center mb-3"><span className="fw-bold">Ultimo sorteo confirmado</span><span className="badge text-bg-success rounded-pill">Verificado</span></div>
                    <div className="d-flex justify-content-between align-items-center"><div><div className="small text-secondary">Triple ganador</div><div className="display-6 fw-bold mb-0">632</div></div><div><div className="small text-secondary">Terminal</div><div className="display-6 fw-bold mb-0">32</div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-panel pb-5" id="jugadas">
          <div className="container">
            <div className="glass-card p-4 p-lg-5">
              <div className="row g-4 align-items-end">
                <div className="col-lg-3">
                  <div className="section-kicker mb-2">Jugada rapida</div>
                  <h2 className="h3 mb-2">Carga tu apuesta en segundos</h2>
                  <p className="mb-0 text-secondary">Bloque pensado para captacion: montos, tipo de jugada y horario visibles al primer scroll.</p>
                </div>
                <div className="col-lg-9">
                  <form className="row g-3">
                    <div className="col-md-3"><label className="form-label fw-semibold">Numero</label><input type="text" className="form-control" placeholder="Ej: 428 o 17" /></div>
                    <div className="col-md-3"><label className="form-label fw-semibold">Modalidad</label><select className="form-select"><option defaultValue>Triple directo</option><option>Triple combinado</option><option>Terminal</option><option>Punta y cola</option></select></div>
                    <div className="col-md-3"><label className="form-label fw-semibold">Loteria</label><input type="text" className="form-control" value="Quetzal Loto" readOnly /></div>
                    <div className="col-md-3"><label className="form-label fw-semibold">Monto</label><input type="number" className="form-control" placeholder="Bs. 100" /></div>
                    <div className="col-md-8"><div className="d-flex flex-wrap gap-2 pt-1"><span className="badge rounded-pill text-bg-light border px-3 py-2">Minimo Bs. 10</span><span className="badge rounded-pill text-bg-light border px-3 py-2">Pago al instante</span><span className="badge rounded-pill text-bg-light border px-3 py-2">Disponible en movil</span><span className="badge rounded-pill text-bg-light border px-3 py-2">Cierre 10 min antes</span></div></div>
                    <div className="col-md-4 d-grid"><button type="button" className="btn btn-primary">Registrar jugada</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="resultados">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
              <div>
                <div className="section-kicker mb-2">Resultados del dia</div>
                <h2 className="section-title mb-2">Resultado actual e historial de sorteos</h2>
                <p className="text-secondary mb-0">Quetzal Loto muestra un unico resultado por sorteo: un triple ganador y una terminal ganadora con acceso rapido al historico reciente.</p>
              </div>
              <a href="#promociones" className="btn btn-outline-dark px-4">Ver promociones</a>
            </div>
            <div className="row g-4">
              <div className="col-xl-7">
                <div className="results-card p-4 p-lg-5 h-100">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div><h3 className="h4 mb-1">Resultado principal</h3><p className="text-secondary mb-0">Quetzal Loto - Sorteo 1:00 PM</p></div>
                    <span className="badge text-bg-danger rounded-pill px-3 py-2">En vivo</span>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-7">
                      <div className="d-flex flex-wrap gap-3 mb-4"><div className="result-ball">6</div><div className="result-ball">3</div><div className="result-ball">2</div><div className="result-ball gold">32</div></div>
                      <div className="row g-3">
                        <div className="col-sm-6"><div className="border rounded-4 p-3 h-100"><div className="small text-secondary mb-1">Modalidad</div><div className="fw-bold fs-5">Triple directo</div><div className="small">Pago estimado: x70</div></div></div>
                        <div className="col-sm-6"><div className="border rounded-4 p-3 h-100"><div className="small text-secondary mb-1">Terminal ganadora</div><div className="fw-bold fs-5">32</div><div className="small">Pago estimado: x7</div></div></div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="rounded-4 p-4 text-white h-100 summary-card-bg">
                        <div className="small text-uppercase fw-bold opacity-75 mb-2">Resumen del sorteo</div>
                        <div className="d-flex justify-content-between py-2 border-bottom border-secondary-subtle"><span>Triple anterior</span><strong>517</strong></div>
                        <div className="d-flex justify-content-between py-2 border-bottom border-secondary-subtle"><span>Terminal anterior</span><strong>17</strong></div>
                        <div className="d-flex justify-content-between py-2 border-bottom border-secondary-subtle"><span>Proximo cierre</span><strong>4:20 PM</strong></div>
                        <div className="d-flex justify-content-between pt-2"><span>Estado</span><strong>Pago habilitado</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="results-card p-4 h-100">
                  <h3 className="h4 mb-3">Historial de los ultimos 20 sorteos</h3>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead><tr><th>Sorteo</th><th>Fecha</th><th>Hora</th><th>Triple</th><th>Terminal</th></tr></thead>
                      <tbody>
                        {historyRows.map((row) => (
                          <tr key={row[0]}>
                            <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="loterias">
          <div className="container">
            <div className="row g-4 align-items-end mb-4">
              <div className="col-lg-8"><div className="section-kicker mb-2">Quetzal Loto</div><h2 className="section-title mb-2">Una sola loteria con triples y terminales</h2><p className="text-secondary mb-0">Esta seccion presenta la operacion de Quetzal Loto como una unica loteria digital, con modalidades claras, horarios fijos y lectura simple del resultado.</p></div>
              <div className="col-lg-4 text-lg-end"><a href="#registrate" className="btn btn-warning px-4">Crear usuario vendedor</a></div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-xl-3"><div className="lottery-card p-4 h-100"><div className="lottery-icon mb-3">01</div><h3 className="h4">Triple directo</h3><p className="text-secondary">La jugada principal de Quetzal Loto con un unico triple ganador por sorteo.</p><ul className="list-unstyled mb-0 small fw-semibold"><li className="py-2 border-top">Sorteos: 11:00 AM / 1:00 PM / 4:30 PM / 8:45 PM</li><li className="py-2 border-top">Triple directo: x70</li><li className="py-2 border-top">Pago rapido y visible en portada</li></ul></div></div>
              <div className="col-md-6 col-xl-3"><div className="lottery-card p-4 h-100"><div className="lottery-icon mb-3 lottery-icon-accent">02</div><h3 className="h4">Terminales</h3><p className="text-secondary">Cada sorteo publica una sola terminal ganadora vinculada al triple del momento.</p><ul className="list-unstyled mb-0 small fw-semibold"><li className="py-2 border-top">Terminal ganadora por cada sorteo</li><li className="py-2 border-top">Pago estimado: x7</li><li className="py-2 border-top">Consulta en tiempo real</li></ul></div></div>
              <div className="col-md-6 col-xl-3"><div className="lottery-card p-4 h-100"><div className="lottery-icon mb-3 lottery-icon-beige">03</div><h3 className="h4">Horarios oficiales</h3><p className="text-secondary">La misma loteria opera con ventanas fijas para mantener orden y confianza.</p><ul className="list-unstyled mb-0 small fw-semibold"><li className="py-2 border-top">11:00 AM</li><li className="py-2 border-top">1:00 PM y 4:30 PM</li><li className="py-2 border-top">Cierre final: 8:45 PM</li></ul></div></div>
              <div className="col-md-6 col-xl-3"><div className="lottery-card p-4 h-100"><div className="lottery-icon mb-3 lottery-icon-dark">04</div><h3 className="h4">Historial visible</h3><p className="text-secondary">El usuario puede revisar rapidamente los ultimos 20 resultados sin salir de la portada.</p><ul className="list-unstyled mb-0 small fw-semibold"><li className="py-2 border-top">20 sorteos recientes</li><li className="py-2 border-top">Triple y terminal por fila</li><li className="py-2 border-top">Ordenado del mas nuevo al mas antiguo</li></ul></div></div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="info-card p-4 h-100">
                  <div className="section-kicker mb-2">Como funciona</div>
                  <h3 className="h4 mb-3">Flujo sencillo para el apostador</h3>
                  <div className="d-flex gap-3 mb-3"><div className="lottery-icon flex-shrink-0">1</div><div><div className="fw-bold">Elige tu modalidad</div><p className="text-secondary mb-0">Triple, terminal, combinado o punta y cola.</p></div></div>
                  <div className="d-flex gap-3 mb-3"><div className="lottery-icon flex-shrink-0 lottery-icon-accent">2</div><div><div className="fw-bold">Carga monto y modalidad</div><p className="text-secondary mb-0">La apuesta entra en Quetzal Loto sin elegir operadoras adicionales.</p></div></div>
                  <div className="d-flex gap-3"><div className="lottery-icon flex-shrink-0 lottery-icon-beige">3</div><div><div className="fw-bold">Consulta resultados</div><p className="text-secondary mb-0">La misma pagina puede servir para mostrar historico y ultimos premios.</p></div></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="stat-card p-4 h-100">
                  <div className="section-kicker mb-2">Indicadores</div>
                  <h3 className="h4 mb-4">Numeros para destacar confianza</h3>
                  <div className="row g-3">
                    <div className="col-6"><div className="border rounded-4 p-3 text-center h-100"><div className="display-6 fw-bold text-danger">+120k</div><div className="small text-secondary">Jugadas registradas</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 text-center h-100"><div className="display-6 fw-bold text-primary">24/7</div><div className="small text-secondary">Consulta de resultados</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 text-center h-100"><div className="display-6 fw-bold stat-beige">4x</div><div className="small text-secondary">Sorteos al dia</div></div></div>
                    <div className="col-6"><div className="border rounded-4 p-3 text-center h-100"><div className="display-6 fw-bold stat-ink">98%</div><div className="small text-secondary">Pagos procesados</div></div></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" id="promociones">
                <div className="promo-card p-4 h-100">
                  <div className="section-kicker mb-2">Promociones</div>
                  <h3 className="h4 mb-3">Area para bonos y llamadas a la accion</h3>
                  <div className="border rounded-4 p-4 mb-3 promo-gradient"><div className="small text-uppercase fw-bold text-danger mb-2">Bono de bienvenida</div><div className="fs-2 fw-bold">20% extra</div><p className="text-secondary mb-0">Ideal para incentivar el primer deposito o registro de usuarios en Guatemala.</p></div>
                  <div className="border rounded-4 p-4"><div className="small text-uppercase fw-bold text-primary mb-2">Agentes y bancas</div><div className="fs-2 fw-bold">Panel reseller</div><p className="text-secondary mb-0">Bloque pensado para captar administradores, vendedores y puntos fisicos en Guatemala.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="registrate">
          <div className="container">
            <div className="cta-banner p-4 p-lg-5">
              <div className="row align-items-center g-4 position-relative">
                <div className="col-lg-8"><div className="section-kicker text-warning mb-2">Llamado final</div><h2 className="section-title mb-3">Estructura lista para convertirla en tu portal de apuestas.</h2><p className="mb-0 text-white-50">Puedes conectar este HTML con login, panel administrativo, API de resultados o formularios de recarga para operar una loteria digital en Guatemala sin cambiar la base visual.</p></div>
                <div className="col-lg-4"><div className="d-grid gap-3"><a href="#jugadas" className="btn btn-warning btn-lg">Empezar ahora</a><a href="#loterias" className="btn btn-outline-light btn-lg">Ver modalidades</a></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pt-5 pb-4 mt-4">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-4"><img src="/assets/img/logo-quetzal-loto-light.svg" alt="Quetzal Loto" className="footer-logo mb-3" /><p className="mb-0">Maqueta HTML responsive con Bootstrap para paginas de triples y terminales, orientada a una loteria digital en Guatemala.</p></div>
            <div className="col-sm-6 col-lg-2"><h4 className="h6 text-uppercase fw-bold mb-3">Navegacion</h4><div className="d-flex flex-column gap-2"><a href="#inicio">Inicio</a><a href="#resultados">Resultados</a><a href="#jugadas">Jugadas</a></div></div>
            <div className="col-sm-6 col-lg-3"><h4 className="h6 text-uppercase fw-bold mb-3">Modalidades</h4><div className="d-flex flex-column gap-2"><a href="#loterias">Triple directo</a><a href="#loterias">Terminales</a><a href="#loterias">Punta y cola</a></div></div>
            <div className="col-lg-3"><h4 className="h6 text-uppercase fw-bold mb-3">Contacto</h4><div className="d-flex flex-column gap-2"><a href="tel:+580000000000">+58 000 000 0000</a><a href="mailto:ventas@quetzalloto.com">ventas@quetzalloto.com</a><span>Ciudad de Guatemala, Guatemala</span></div></div>
          </div>
          <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between gap-2 small"><span>© 2026 Quetzal Loto. Estructura demo para loteria en Guatemala.</span><span>Bootstrap 5 + React + Vite.</span></div>
        </div>
      </footer>
    </>
  );
}