import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HomePage = () => {
  return (
    <div className="homepage" >
      <header className=" w-100 min-vh-100 d-flex align-item-center">
        <Container>
          <Row className="header-box d-flex align-item-center">
            <Col>
              <h1>
                Hi, I'm <br /><span>Fajarudin Zakariya</span><br />saya seorang <span>Frontend Developer</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatem.</p>
              <button className="btn btn-primary">Hire Me</button>
            </Col>

          </Row>
          <Col className="images" >
            <img src="https://avatars.githubusercontent.com/u/65209706?v=4" alt="fajarudin zakariya" className="img-fluid" />
          </Col>
        </Container>

      </header>
      <div className="about w-100 min-vh-100">
        <div className="about-box">
          <h2>About Me</h2>
          <p>Saya fajarudin zakariya, saya seorang mahasiswa di Universitas dian nuswantoro<br /> asal saya jepara dan saya sedang mengikuti kegiatan Studi independen di hacktiv8</p>
          <img src="https://avatars.githubusercontent.com/u/65209706?v=4" alt="fajarudin zakariya" className="imags" />


        </div>
      </div>
      <div className="experience w-100 min-vh-100">
        <div className="ex-component">
          <div className="hacktiv8">
            <h2>HACKTIV8</h2>
            <h3>Studi Independen - Frontend React & React native</h3>
            <p><li>mempelajari dan membangun sebuah web and aps dari react & React native</li></p>
          </div>
          <div className="CoE">
            <h2>Center of Exelence</h2>
            <h3>Magang - Machine learning</h3>
            <p><li>membuat model data dari yolov5 untuk aplikasi pendeteksi sampah</li></p>
          </div>
        </div>
      </div>
      <div className="education w-100 min-vh-100">
        <div className="edu-component">
          <div className="universitas">
            <h2>Universitas Dian Nuswantoro</h2>
            <h3>S1 Teknik Informatika</h3>
            <p><li>2020 - Sekarang</li></p>
          </div>
          <div className="smk">
            <h2>SMA N 1 PECANGAAN </h2>
            <h3>Ilmu Pengetahuan Sosial</h3>
            <p><li>2017 - 2020</li></p>
          </div>
        </div>
      </div>
      <div className="skill w-100 min-vh-100">
        <h2>My Skills</h2>
        <p>HTML</p>
        <div class="container">
          <div class="skills html">90%</div>
        </div>

        <p>CSS</p>
        <div class="container">
          <div class="skills css">80%</div>
        </div>

        <p>JavaScript</p>
        <div class="container">
          <div class="skills js">65%</div>
        </div>

        <p>PHP</p>
        <div class="container">
          <div class="skills php">60%</div>
        </div>
      </div>
      <div className="interests w-100 min-vh-100">
        <div className="interests-box">
          <h2>Interests</h2>
          <p>saya ingin menjadi seorang sofware developer di salah satu perusahaan yang berjalan dibidang Teknology</p>
        </div>
      </div>
      <div className="awards w-100 min-vh-100">
        <div class="row">
          <div class="column">
            <div class="card"><h1>ID CAMP</h1>
              <p>2023</p>
              <p>frontend web developer</p></div>
          </div>
          <div class="column">
            <div class="card">
              <h2>DevOps and Back-End Developer</h2>
              <p>2023</p>
              <p>Back-End Developer</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>DICODING</h2>
              <p>2022</p>
              <p>Front-End Developer</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Udemy</h2>
              <p>2021</p>
              <p>Front-End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}



export default HomePage