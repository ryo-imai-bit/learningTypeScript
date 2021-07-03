const marked = require('marked');

type CliOptions = {
  gfm: boolean,
}

export default function (content: string, cliOptions: CliOptions) {
  return marked(content, {
    gfm: cliOptions.gfm,
  });
}
