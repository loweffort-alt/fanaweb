export const templateHTML = (to = "Alex") => {
  return `
    <div style="max-width: 600px; border: 1px solid #efefef; padding: 16px">
      <div style="margin-bottom: 32px; color: #222">
        <p style="margin-bottom: 16px">Hi, ${to},</p>
        <p style="margin-bottom: 16px">Welcome to my application!</p>
        <p>
          Proident ullamco cillum eu magna dolor Lorem sit elit ad dolore eiusmod aliquip dolor enim. Cupidatat labore velit
          aliquip ullamco aute esse cupidatat nisi quis ullamco. Pariatur aute do quis ex exercitation ullamco enim tempor.
          Culpa veniam do ex velit magna consequat Lorem duis enim anim do.
        </p>
      </div>
      <div style="color: #5f5f5f">
        <p>Footer content goes here ...</p>
      </div>
    </div>
  `
}
