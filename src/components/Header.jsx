import img from "/lsh/react/movie/src/components/img/2.png";
export function Header() {
  return (
    <>
      <div className="header">
        <img
          src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png"
          alt="로고"
          height={53}
        />
        <p className="headerText">DEEP DIVE SPACE</p>
        <div className="headerIcon">
          <img
            src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png"
            alt=""
            height={36}
          />
          <img
            src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png"
            alt=""
            height={36}
          />
          <img
            src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png"
            alt=""
            height={36}
          />
          <img
            src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png"
            alt=""
            height={36}
          />
        </div>
      </div>
      <div className="ad">
        <img className="img1" src={img} alt="" />
      </div>
    </>
  );
}
