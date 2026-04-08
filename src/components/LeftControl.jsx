import React from 'react'

function LeftControl({ handleDirection }) {
  return (
    <div className="switch-joycon switch-joycon--left">
      <div className="flex shrink-0 justify-end pr-3 pt-4">
        <div
          className="h-1 w-6 rounded-sm"
          style={{ background: 'var(--switch-button)' }}
          aria-hidden
        />
      </div>

      <div className="flex shrink-0 justify-center pt-2">
        <div className="joycon-stick">
          <div className="joycon-stick__cap" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center py-2">
        <div className="joycon-diamond">
          <button
            type="button"
            onClick={() => handleDirection('up')}
            className="joycon-diamond__btn joycon-diamond__btn--up cursor-pointer text-sm text-neutral-300"
            style={{ background: 'var(--switch-button)' }}
          >
            ^
          </button>
          <button
            type="button"
            onClick={() => handleDirection('down')}
            className="joycon-diamond__btn joycon-diamond__btn--down cursor-pointer text-sm text-neutral-300"
            style={{ background: 'var(--switch-button)' }}
          >
            v
          </button>
          <button
            type="button"
            onClick={() => handleDirection('left')}
            className="joycon-diamond__btn joycon-diamond__btn--left cursor-pointer text-sm text-neutral-300"
            style={{ background: 'var(--switch-button)' }}
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => handleDirection('right')}
            className="joycon-diamond__btn joycon-diamond__btn--right cursor-pointer text-sm text-neutral-300"
            style={{ background: 'var(--switch-button)' }}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="flex shrink-0 justify-end pr-3 pb-4">
        <div className="joycon-capture" aria-hidden />
      </div>
    </div>
  )
}

export default LeftControl
