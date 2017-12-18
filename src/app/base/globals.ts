export class Globals {
  title = 'FLL Judging';
  version = '0.0.1';
  tournament = 'test';

  typeToString(type): string {
    var fullType = '';
    switch (type) {
      case 'PR':
        fullType = 'project';
        break;
      case 'RD':
          fullType = 'robot';
          break;
      case 'CV':
            fullType = 'core values';
            break;
      default:
        fullType = 'error';
    }
    return fullType;
  }
}
