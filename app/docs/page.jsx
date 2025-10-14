import Class from "@/components/className";
import "./style.css";

export default function Home() {
  return (
    <div className="container-content-page ml-100 mr-100">

      <nav className="contain-left-navbar order-last hidden w-56 lg:block mx-auto float-left">
        <div className="text-gray-1000 sticky top-[126px] h-[calc(100vh-121px)]">
          <div className="text-gray-1000 mb-1 mt-[7px] text-sm font-medium"></div>
          <div className="relative">
            <div aria-hidden="true"></div>
            <div aria-hidden="true"></div>
            <ul className="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm">
              <h2>Getting Started</h2>
              <li><a href="">Installation</a></li>
              <li><a href="">Compatibility</a></li>
              <li><a href="">Editer Setup</a></li>
              <li><a href="">Upgrade guide</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="contain-left-navbar order-last hidden w-56 lg:block mx-auto float-right">
        <div className="text-gray-1000 sticky top-[126px] h-[calc(100vh-121px)]">
          <div className="text-gray-1000 mb-1 mt-[7px] text-sm font-medium"></div>
          <div className="relative">
            <div aria-hidden="true"></div>
            <div aria-hidden="true"></div>
            <ul className="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm">
              <h2>Getting Started</h2>
              <li className="list-he"><a href="">Installation</a></li>       
              <li className="list-he"><a href="">Compatibility</a></li>
              <li className="list-he"><a href="">Editer Setup</a></li>
              <li className="list-he"><a href="">Upgrade guide</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <article className="mt-4 w-full min-w-0 px-1 md:px-12 md:pr-6">
        <div className="prose-vercel">
          <div className="flex flex-col md:flex-row items-start md:justify-between gap-2 md:items-center -mt-4 mb-7 md:mb-10 md:mt-2">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <h2 className="text-[40px] font-medium w-full mt-5 mb-3">คู่มือการใช้งาน Tutorials</h2>
              <p className="text-[18px] m-3 w-full">ยินดีต้อนรับสู่ คู่มือการใช้งาน Tutorials</p>
              <span className="text-[40px] w-full mt-5 mb-3">อะไรคือ Tutorials?</span>
              <p className="text-[18px] m-3">
                Tutorials (บทช่วยสอน) คือ โปรเจ็คที่ถูกพัฒนาโดย <span>@ม่อน_ชอบกินกุ้งย่าง!</span> 
                ที่เป็นคู่มือการใช้งานแท็กต่างๆ เช่น Html, Css, java, React หรืออื่นๆที่ไม่ได้มีแค่การ <span>ใช้ภาษาในการพัฒนาเว็บ</span> อย่างเดียว
                ภาษาโปรแกรมอื่นๆเช่น Python, NodeJs หรืออื่นๆที่จะตามมา ก็สามารถหาได้ใน <span>Tutorials</span> แห่งนี้
              </p>
              <span className="text-[40px]">แล้วเว็บ Tutorials ใช้อะไรในการสร้าง?</span>
              <p className="text-[18px] m-3">
                Tutorials ถูกสร้างขึ้นด้วย <a className="underline font-bold" href="https://nextjs.org/">Next.js </a> 
                 ซึ่ง เป็น Framework ของ React ที่ช่วยให้เราสร้างเว็บแอปได้ง่ายขึ้นและมีประสิทธิภาพมากกว่า React ธรรมดา
              </p>
              <span className="">ทำไมถึงเลือกใช้ Next.Js</span>
              <p>เหตุผลหลัก ที่เลือก</p>
            </div>
          </div>
        </div>
      </article>

    </div>
  );
}
