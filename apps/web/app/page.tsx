import { Button } from "@upleat-ui/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello U PLEAT</h1>
      <Button appName="web">Click me</Button>
    </div>
  );
}
