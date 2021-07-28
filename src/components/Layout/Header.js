import classes from "./Header.module.css";
import mealsImgae from "../../assets/meals.jpg";
import CartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <hi>ReactMeals</hi>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImgae} alt="a tabble full of delicious food" />
      </div>
    </>
  );
};

export default Header;
