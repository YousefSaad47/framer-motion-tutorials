import { AnimatedCards } from '../components/Card';
import BeforeChildren from '../components/motion/beforeChildren';
import StaggerChildren from '../components/motion/staggerChildren';
export default function Home() {
  return (
    <AnimatedCards>
      <StaggerChildren />
      <BeforeChildren />
      <StaggerChildren />
      <BeforeChildren />
    </AnimatedCards>
  );
}
