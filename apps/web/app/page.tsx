import { Button } from "../../../packages/ui/src/Button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello U PLEAT</h1>
      <Button>Click me</Button>
    </div>
  );
}
