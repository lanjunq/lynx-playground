export class DataManager {
  private static inspirationalQuotes = [
    '今天的努力，是明天的礼物。',
    '做最好的自己，成为更好的人。',
    '微小的进步也是进步。',
    '坚持做正确的事，而非容易的事。',
    '成功不是终点，而是一个旅程。',
  ];

  public static getInspirationalQuotes(): string[] {
    return this.inspirationalQuotes;
  }

  public static getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.inspirationalQuotes.length);
    return this.inspirationalQuotes[randomIndex];
  }

  private static morningRoutine = [
    '感恩和珍惜当下。生命是多么脆弱和宝贵，能活着实在是件惊喜的事情。',
    '读我前一天的日记。为我的一天设定一些框架。',
    '列出我的长期五年目标。列出我的短期年底目标。',
    '想象自己完成了所有的待办事项，包括那些最难的任务。',
    '回顾我的重要原则，构成了我努力变好的核心价值观。'
  ];

  public static getMorningRoutine(): string[] {
    return this.morningRoutine;
  }
} 