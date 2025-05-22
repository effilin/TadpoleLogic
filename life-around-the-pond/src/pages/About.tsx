import "../App.css";

export default function About() {
  return (
    <div>
      <div className='boxAbout1'>
        <div className='imgBox'>
          <div className='imgInner'>
            <img
              className='img1'
              src='https://res.cloudinary.com/tadpole-logic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,f_png/v1747848797/20240902_171317_dgojae.jpg'
              alt='gadget girl and tadpole logic on a mountain standing in a heart'
            />
            <img
              className='img2'
              src='https://res.cloudinary.com/tadpole-logic/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,f_png/v1747869324/IMG_20240907_164646_ksyvfu.jpg'
              alt='gadget girl and tadpole logic'
            />
          </div>
        </div>

        <div className='about1'>
          <p>
            Life on the pond changes with the seasons. Tom Tadpole loves
            springtime growth and .... Eva Gadget Girl gauges Gods greatness in
            nature all around her by the pond. Together they make a dynamic duo.
          </p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
