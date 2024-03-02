/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                // href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                CONTACT ME ON alejandroperezmorales.g@gmail.com
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, alejandroperezmorales.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
