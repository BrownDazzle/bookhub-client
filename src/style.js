const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  custom_container: "w-11/12 hidden sm:block",
  heading: 'text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]',
  section: 'w-11/12 mx-auto',
  productTitle: 'text-[25px] font-[600] font-Roboto text-[#333]',
  productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto",
  price: "font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through",
  shop_name: "pt-3 text-[15px] text-blue-400 pb-3",
  active_indicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",
  button: 'w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer',
  cart_button: "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",
  cart_button_text: "text-[#fff] text-[16px] font-[600]",
  input: "w-full border p-1 rounded-[5px]",
  activeStatus: "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",
  noramlFlex: "flex items-center"
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
