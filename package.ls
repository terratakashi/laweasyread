name: \laweasyread
version: \0.0.1
descritpion: 'API for Taiwan law'
scripts:
  prepublish: """
    ./node_modules/.bin/lsc -cj package.ls
  """
dependencies:
  express: \3.x
engines:
  node: \0.10.x
devDependencies:
  LiveScript: \1.1.x
