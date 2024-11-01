export const importsExample1Src = `# stdlib imports
import "std/list.rl"; full

import "std/math.rl";       # uses \`full\` by default

# this module can now be accessed by
# Utils:: or utl::
import "std/utils.rl"; almost as utl


# local imports
import env("HOME")+"/my-file.rl"; full as my_file

import "my-local-file.rl"; as local
`;
