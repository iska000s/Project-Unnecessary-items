import React from "react";

const ThreeColumns = () => {
    return (
        <section id="three" className="three_columns_box">
        <div className="column">
          <p className="number">10</p>
          <h4 className="header_4 three_columns_header4">ODDANYCH WORKÓW</h4>
          <p>lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.</p>
          <p>Aliquam erat volutpat</p>
        </div>
        <div className="column">
          <p className="number">5</p>
          <h4 className="header_4 three_columns_header4">WSPARTYCH ORGANIZACJI</h4>
          <p>lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.</p>
          <p>Aliquam erat volutpat</p>
        </div>
        <div className="column">
          <p className="number">7</p>
          <h4 className="header_4 three_columns_header4">ZORGANIZOWANYCH ZBIÓREK</h4>
          <p>lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.</p>
          <p>Aliquam erat volutpat</p>
        </div>
      </section>
    )
}

export default ThreeColumns;