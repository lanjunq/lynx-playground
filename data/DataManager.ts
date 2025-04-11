export class DataManager {

  public static getRandomQuote(): string {
    const inspirationalQuotes = [
      '今天的努力，是明天的礼物。',
      '做最好的自己，成为更好的人。',
      '微小的进步也是进步。',
      '坚持做正确的事，而非容易的事。',
      '成功不是终点，而是一个旅程。',
    ];
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    return inspirationalQuotes[randomIndex];
  }

  public static getMorningRoutine(): string[] {
    return [
      '感恩和珍惜当下。生命是多么脆弱和宝贵，能活着实在是件惊喜的事情。',
      '读我前一天的日记。为我的一天设定一些框架。',
      '列出我的长期五年目标。列出我的短期年底目标。',
      '想象自己完成了所有的待办事项，包括那些最难的任务。',
      '回顾我的重要原则，构成了我努力变好的核心价值观。',
    ];
  }
  private static isMorningRoutineDone: boolean = false;
  public static getIsMorningRoutineDone(): boolean {
    return this.isMorningRoutineDone;
  }
  public static markMorningRoutineDone(): void {
    this.isMorningRoutineDone = true;
  }

  public static getEveningRoutine(): string[] {
    return [
      '今天有什么让我觉得生活美好的事情? 让我开心的瞬间?',
      '今天有什么让我自己觉得变得更好的事情?',
      '今天我领悟到的道理?',
      '感谢自己能够活着度过这一天，对即将到来的明天充满期待，同时会对一天中的美好时光心存感激。提醒自己：其实不用付出太多努力，稍微放松一下，停下来深呼吸，然后告诉自己：活着真是太好了。生命不会永远持续，时间过得很快，所以就是一个感恩生活的宝贵时刻。',
      '珍视勤勉和付出，每天都在努力践行这一点。强调对他人的爱和同情。有了这两个因素，生活就会更美好。',
      '做白日梦，复习知识，感恩生活里的美好。',
    ];
  }
  private static isEveningRoutineDone: boolean = false;
  public static getIsEveningRoutineDone(): boolean {
    return this.isEveningRoutineDone;
  }
  public static markEveningRoutineDone(): void {
    this.isEveningRoutineDone = true;
  }

  public static getWeeklyPlan(): string[] {
    return [
      '每天运动 30 分钟',
      '周末享受打球的过程', 
      '读一本书',
    ];
  }

  // 今日计划
  private static todayPlan?: string[] = undefined;
  public static getTodayPlan(): string[] | undefined {
    return this.todayPlan;
  }
  public static setTodayPlan(plan: string[]): void {
    this.todayPlan = plan;
  }
}
