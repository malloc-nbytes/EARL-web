export const importsExample1Src = `# stdlib imports
import "std/list.earl"; full

import "std/math.earl";       # uses \`full\` by default

# this module can now be accessed by
# Utils:: or utl::
import "std/utils.earl"; almost as utl


# local imports
import env("HOME")+"/my-file.earl"; full as my_file

import "my-local-file.earl"; as local
`;
