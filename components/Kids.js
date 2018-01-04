export class Kid {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Kids = [
  new Kid("William Chavez",
          "Until he was almost 2, William was always sick. Born in March 2004, William suffered chronic respiratory infections, unexplained fevers, reflux and failure to thrive. He looked thin and wane. In December 2004, Sarah Chesrown, MD, Ph.D., a pediatric pulmonologist at Shands Children’s Hospital, diagnosed William with asthma and treated his symptoms aggressively. William’s respiratory health improved, but he still tired easily, became short of breath during activity, and he ate poorly. Three months later, (Tallahassee) physicians found that William had a congenital heart defect called partial anomalous pulmonary venous return (two of his pulmonary veins are attached to the wrong place on his heart).",
          require('../assets/photos/kids/williamchavez.webp')),
  new Kid("Carson Chapman",
          "In January of 2007, Carson was an active, funny and some might say very mischievous, four year old. So when he came to me in the kitchen one afternoon and said he broke his arm, I brushed him off and said oh you would be in a lot more pain if you really broke your arm. And also being that I am a nurse I don’t tend to get overly excited unless a bone is hanging out or someone is gushing blood. But over the next few days, Carson continued to complain of arm pain. So I decided I should probably take him seriously and get his arm checked out. Through numerous appointments and x-rays, the doctors thought something looked weird around his elbow and it could possibly be a hairline fracture so they decided to put his arm in a cast for two weeks.",
          require('../assets/photos/kids/carsonchapman.webp')),
  new Kid("Jake Crumpacker",
          "Jake’s leg was in pain for months leading up to February 2011. At night, his dad would rub his leg and give him ibuprofen. The next day, Jake would play two soccer games followed by baseball practice and finish the evening training for track. Still the leg pain made him mom, Barbara, wonder in her son had cancer. She had worked in a cancer unit and knew the signs. But since he would play, run and simply not slow down, Barbara and Jake’s dad, Jon, just attributed it to a strained tendon or muscle. On February 28th, their world would drastically change. That’s when local physicians found a growth on Jake’s fibula that needed to be evaluated immediately by experts.",
          require('../assets/photos/kids/jakecrumpacker.webp'))
];
