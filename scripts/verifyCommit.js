// 自定义校验commit-msg
const fs = require('fs')
const chalk = require('chalk')

const commitEditMsgFilePath = process.argv[2]

const getCommitMsg = () => {
  const commitMsg = fs.readFileSync(commitEditMsgFilePath, {
    encoding: 'utf-8'
  })
  return commitMsg
}

const msg = getCommitMsg()

const commitRE = /^(.+)(\(.+\))?: .{1,50}/

const init = async () => {
  if (!commitRE.test(msg)) {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `invalid commit message format.`
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`✅测试(typescript): 测试`)}\n` +
        `    ${chalk.green(`✅测试: 测试`)}\n\n` +
        `    ${chalk.green(
          `✅测试(typescript): 再测试\n\n
             长说明\n\n
             ISSUES CLOSED: #233`
        )}\n` +
        chalk.red(`请按规范填写\n`)
    )
    process.exit(1)
  } else {
    console.log(`
    ✅ commit-msg 校验通过\n
    `)
  }
}

init()
