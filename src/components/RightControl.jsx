import React from 'react'

function RightControl({ handleSelection, handleHome }) {
  return (
    <div className="switch-joycon switch-joycon--right">
      <div className="flex shrink-0 pl-4 pt-4">
        <div className="joycon-plus" aria-hidden />
      </div>

      <div className="flex shrink-0 justify-center pt-2">
        <div className="joycon-diamond">
          <button
            className="joycon-diamond__btn joycon-diamond__btn--up cursor-pointer text-[15px] font-semibold text-neutral-400 hover:brightness-110"
            style={{
              background: 'var(--switch-button)',
              border: '2px solid #252525',
            }}
          >X</button>
          <button
            className="joycon-diamond__btn joycon-diamond__btn--down cursor-pointer text-[15px] font-semibold text-neutral-400 hover:brightness-110"
            style={{
              background: 'var(--switch-button)',
              border: '2px solid #252525',
            }}
          >B</button>
          <button
            className="joycon-diamond__btn joycon-diamond__btn--left cursor-pointer text-[15px] font-semibold text-neutral-400 hover:brightness-110"
            style={{
              background: 'var(--switch-button)',
              border: '2px solid #252525',
            }}
          >Y</button>
          <button
            onClick={handleSelection}
            className="joycon-diamond__btn joycon-diamond__btn--right cursor-pointer text-[15px] font-semibold text-neutral-400 hover:brightness-110"
            style={{
              background: 'var(--switch-button)',
              border: '2px solid #252525',
            }}
          >A</button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center pb-2">
        <div className="flex justify-center">
          <div className="joycon-stick">
            <div className="joycon-stick__cap" />
          </div>
        </div>
      </div>

      <div className="flex shrink-0 pl-3 pb-4">
        <button
          type="button"
          onClick={handleHome}
          className="joycon-home hover:brightness-110 active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          aria-label="Volver al inicio: primera página de Pokémon"
        >
          <span aria-hidden>H</span>
        </button>
      </div>
    </div>
  )
}

export default RightControl
