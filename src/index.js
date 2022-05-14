const STANDARD_8_COLORS = '  Standard Colors:\n' +
    '┌────────────┬───────┬───────┬───────┬────────┬──────┬─────────┬──────┬───────┐\n' +
    '│   Color    │ Black │  Red  │ Green │ Yellow │ Blue │ Magenta │ Cyan │ White │\n' +
    '├────────────┼───────┼───────┼───────┼────────┼──────┼─────────┼──────┼───────┤\n' +
    '│ Foreground │\u001b[30m   30  \u001b[0m│\u001b[31m  31   \u001b[0m│\u001b[32m  32   \u001b[0m│\u001b[33m   33   \u001b[0m│\u001b[34m  34  \u001b[0m│\u001b[35m   35    \u001b[0m│\u001b[36m  36  \u001b[0m│\u001b[37m  37   \u001b[0m│\n' +
    '├────────────┼───────┼───────┼───────┼────────┼──────┼─────────┼──────┼───────┤\n' +
    '│ Background │\u001b[40m\u001b[37m  40   \u001b[0m│\u001b[41m  41   \u001b[0m│\u001b[42m  42   \u001b[0m│\u001b[43m\u001b[30m   43   \u001b[0m│\u001b[44m  44  \u001b[0m│\u001b[45m   45    \u001b[0m│\u001b[46m  46  \u001b[0m│\u001b[47m\u001b[30m  47   \u001b[0m│\n' +
    '└────────────┴───────┴───────┴───────┴────────┴──────┴─────────┴──────┴───────┘\n';

const BRIGHT_8_COLORS = '  Bright Colors:\n' +
    '┌────────────┬───────┬───────┬───────┬────────┬──────┬─────────┬──────┬───────┐\n' +
    '│   Color    │ Black │  Red  │ Green │ Yellow │ Blue │ Magenta │ Cyan │ White │\n' +
    '├────────────┼───────┼───────┼───────┼────────┼──────┼─────────┼──────┼───────┤\n' +
    '│ Foreground │\u001b[90m  90   \u001b[0m│\u001b[91m  91   \u001b[0m│\u001b[92m  92   \u001b[0m│\u001b[93m   93   \u001b[0m│\u001b[94m  94  \u001b[0m│\u001b[95m   95    \u001b[0m│\u001b[96m  96  \u001b[0m│\u001b[97m  97   \u001b[0m│\n' +
    '├────────────┼───────┼───────┼───────┼────────┼──────┼─────────┼──────┼───────┤\n' +
    '│ Background │\u001b[100m\u001b[97m  100  \u001b[0m│\u001b[101m  101  \u001b[0m│\u001b[102m  102  \u001b[0m│\u001b[103m\u001b[30m   103  \u001b[0m│\u001b[104m  104 \u001b[0m│\u001b[105m   105   \u001b[0m│\u001b[106m\u001b[30m  106 \u001b[0m│\u001b[107m\u001b[30m  107  \u001b[0m│\n' +
    '└────────────┴───────┴───────┴───────┴────────┴──────┴─────────┴──────┴───────┘\n';

const formatDigit = function(num) {
    if (num < 10) {
        return '   ' + num + ' ';
    } else if (num < 100) {
        return '  ' + num + ' ';
    } else {
        return ' ' + num + ' ';
    }
}

const formatFrontDigit = function(num) {
    if (num < 10) {
        return '  ' + num + ' ';
    } else if (num < 100) {
        return ' ' + num + ' ';
    } else {
        return '' + num + ' ';
    }
}

const formatEndDigit = function(num) {
    if (num < 10) {
        return '   ' + num + '';
    } else if (num < 100) {
        return '  ' + num + '';
    } else {
        return ' ' + num + '';
    }
}

const ansi256Foreground = function() {
    let result = '  ANSI-256 Foreground Colors:\n' + '┌──────────────────────────────────────────────────────────────────────────────┐';
    for (let i = 0; i < 256; i++) {
        if (i % 16 === 0) {
            if (i === 0) {
                result += '\n│';
            } else {
                result += '│\n│';
            }
        }
        result += '\u001b[38;5;' + i + 'm';

        if (i % 16 === 0) {
            result += formatFrontDigit(i);
        } else if (i % 16 === 15) {
            result += formatEndDigit(i);
        } else {
            result += formatDigit(i);
        }
        result += '\u001b[0m';

        if (i === 255) {
            result += '│\n';
        }
    }
    result += '└──────────────────────────────────────────────────────────────────────────────┘\n';
    return result;
}

const ansi256Background = function() {
    let result = '  ANSI-256 Background Colors:\n' + '┌──────────────────────────────────────────────────────────────────────────────┐';
    for (let i = 0; i < 256; i++) {
        if (i % 16 === 0) {
            if (i === 0) {
                result += '\n│';
            } else {
                result += '│\n│';
            }
        }
        result += '\u001b[48;5;' + i + 'm';

        if (i % 16 === 0) {
            result += formatFrontDigit(i);
        } else if (i % 16 === 15) {
            result += formatEndDigit(i);
        } else {
            result += formatDigit(i);
        }
        result += '\u001b[0m';

        if (i === 255) {
            result += '│\n';
        }
    }
    result += '└──────────────────────────────────────────────────────────────────────────────┘\n';
    return result;
}

module.exports = {
    STANDARD_8_COLORS: STANDARD_8_COLORS,
    BRIGHT_8_COLORS: BRIGHT_8_COLORS,
    ANSI_256_FOREGROUND_COLORS: ansi256Foreground(),
    ANSI_256_BACKGROUND_COLORS: ansi256Background(),
};