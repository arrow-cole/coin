public class Main {
    private static class DrDino {
        String name = "Dr. Dino";
        boolean happy = false;
        boolean cheeseburgerInTummy = false;
        boolean fueled = false;
        public void eatCheeseburger(Cheeseburger cheezyBurger) {
            if (cheezyBurger.isGood()) {
                cheeseburgerInTummy = true;
                happy = true;
            }
        }
        public Cheeseburger makeCheeseburger() {
            Cheeseburger cheezyBurger = new Cheeseburger();
            return cheezyBurger;
        }
        public void drinkRocketFuel(RocketFuel fuelz) {
            if (fuelz.getFlavor().equals("Code Red")) {
                fueled = true;
            }
        }
    }
    private static class Cheeseburger {
        public boolean isGood() {
            return true;
        }
    }
    private static class RocketFuel {
        String flavor = "Code Red";
        public String getFlavor() {
            return flavor;
        }
    }
    public static void main(String[] args) {
        DrDino dino = new DrDino();
        Cheeseburger cheezyBurger = dino.makeCheeseburger();
        dino.eatCheeseburger(cheezyBurger);
        RocketFuel fuelz = new RocketFuel();
        dino.drinkRocketFuel(fuelz);
    }
}
