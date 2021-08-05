import classes from "./Header.module.css";
import mealsImgae from "../../assets/meals.jpg";
import CartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImgae} alt="a tabble full of delicious food" />
      </div>
    </>
  );
};

export default Header;
