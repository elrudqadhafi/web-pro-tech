import React from "react"
import { Helmet } from "react-helmet"
import { Col, Container, Row } from "react-bootstrap"
import { semuaPaket } from "../data"
import { useNavigate } from "react-router-dom"
import FooterComponent from "../components/FooterComponent"
import NavbarComponent from "../components/NavbarComponent"
import ScrollToTop from "../components/ScrollToTop"

const PaketPage = () => {
  let navigate = useNavigate()

  const handleOrderClick = (paket) => {
    navigate("/pemesanan-pembayaran", { state: { paket } })
  }

  const phoneNumber = "+6281364443540"
  const message1 =
    "Halo Web Pro Tech, saya ingin konsultasi untuk jasa maintenance website."
  const message2 =
    "Halo Web Pro Tech, saya ingin berdiskusi tentang harga pembuatan website."

  const openWhatsAppChat = (message) => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`
    window.location.href = whatsappURL
  }

  return (
    <>
      <NavbarComponent />
      <ScrollToTop />
      <div className="paket-page w-100 min-vh-100">
        <Helmet>
          <title>Paket Website - Web Pro Tech</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h3>Paket Website</h3>
            </Col>
          </Row>
          <Row>
            {semuaPaket.map((paket) => {
              return (
                <Col key={paket.id} lg="4" md="6" className="mt-4">
                  <div className="plan-card">
                    <h4 className="text-center">{paket.title}</h4>
                    <p className=" desc text-center">{paket.description}</p>
                    <div className="etiquet-price">
                      <span>Mulai Dari</span>
                      <p>
                        {paket.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                    <button
                      className="btn-order mt-3 mb-3"
                      onClick={() => handleOrderClick(paket)}
                    >
                      Beli Paket
                    </button>
                    <div className="benefits-list">
                      <ul>
                        {paket.features.map((feature, index) => {
                          return (
                            <li key={index}>
                              <i className="ri-checkbox-circle-line"></i>
                              {feature}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col>
              <h3>Maintanance Website</h3>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="8" className="m-auto">
              <div className="plan-card">
                <div className="etiquet-price">
                  <button
                    className="btn-order mt-3 mb-3"
                    onClick={() => openWhatsAppChat(message1)}
                  >
                    Hubungi Kami
                  </button>
                </div>
                <div className="benefits-list">
                  <ul>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pembaruan Konten
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pemantauan Kinerja
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Optimisasi SEO
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pemantauan Analitik
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pengelolaan Konten
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pembaruan Teknologi
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Back-up Berkala
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pemeliharaan Kecepatan Website
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Perbaikan Design
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Komersialisasi
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i>
                      Pemantauan Uptime
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <p>
                Kami sangat senang Anda berkunjung ke situs web kami! Kami
                mengerti bahwa setiap proyek website memiliki karakteristik
                unik. Oleh karena itu, harga yang kami tampilkan di sini adalah
                estimasi awal yang fleksibel. Kami yakin bahwa dengan berdiskusi
                lebih lanjut tentang visi dan kebutuhan proyek Anda, kami dapat
                menyusun penawaran harga yang sesuai dengan tingkat kompleksitas
                dan fitur khusus yang Anda inginkan. Jangan ragu untuk
                menghubungi kami, kami berkomitmen untuk memberikan solusi yang
                tepat dan sesuai dengan anggaran Anda.
              </p>
              <button onClick={() => openWhatsAppChat(message2)}>
                Mari Berdiskusi
              </button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h4>
                Bagaimana perbandingan harga pembuatan website di Web Pro Tech
                dengan penyedia jasa lainnya?
              </h4>
              <p>
                Saat Anda mencari jasa pembuatan website di Google, Anda akan
                menemukan banyak pilihan dengan berbagai penawaran dan harga
                yang beragam.
              </p>
              <p>
                Web Pro Tech mungkin bukanlah pilihan termurah, tetapi kami
                menjamin bahwa Anda akan mendapatkan nilai yang terbaik dari
                investasi Anda.
              </p>
              <p>
                Kami hadir untuk mereka yang menginginkan situs web berkualitas
                tinggi dengan dukungan <span>After Sales Support</span>. Kami
                ingin Anda dapat sepenuhnya fokus pada perkembangan bisnis Anda,
                dan itulah yang kami tawarkan sebagai nilai tambah.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  )
}

export default PaketPage
