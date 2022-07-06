/* eslint-disable prettier/prettier */

const google = () => {
  return (
    <div className="mx-4 grid min-h-screen gap-4  px-4">
      <header className=" grid place-items-center content-center p-4 text-center">
        <h2 className="bg-gradient-to-bl from-red-500 to-blue-500 bg-clip-text pb-4 text-3xl font-bold text-transparent dark:from-red-400 sm:text-5xl md:pb-6">
          Ortodoxa kalendern Synaxarion
        </h2>
        <label>Events to Show</label>
        <input type="range" className="cursor-grab accent-red-600" />
        {/* <label for="eventAmt">Events to Show</label> */}
      </header>

      <main className="mx-auto w-full max-w-6xl ">
        <section
          className="grid items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8"
          id="events-container"
        >
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
          <article className="rounded-lg bg-white shadow-xl shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-800">
            <div className="grid place-items-center rounded-t-lg bg-indigo-500 p-3 uppercase text-indigo-50 shadow">
              <div className="text-sm">Jul</div>
              <div className="text-3xl font-bold">6</div>
            </div>

            <div className="grid gap-4 p-4 md:gap-6 md:p-6 lg:p-8">
              <div className="grid gap-1">
                <p className="text-sm text-slate-400">Feb 13–Feb 16</p>
                <h2 className="text-2xl font-bold">
                  <a href="#">Really Cool Event</a>
                </h2>
                <div className="grid gap-1">
                  <button
                    className="flex cursor-pointer items-center gap-1 text-slate-400"
                    aria-expanded="false"
                    aria-controls="details-1"
                    id="btn-1"
                  >
                    <p className="pointer-events-none">See details</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none h-4 w-4 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo
                      reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam
                      fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore
                      hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero
                      soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-4 py-2 text-center font-bold text-indigo-50 shadow-2xl shadow-indigo-200 ring ring-indigo-500 ring-offset-0 hover:shadow-none focus:outline-none focus:ring-offset-2 dark:shadow-none"
              >
                View Event
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default google
