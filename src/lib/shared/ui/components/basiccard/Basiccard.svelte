 <article class="border-2 hover:drop-shadow-lg hover:-translate-y-1 bg-gray-50 hover:bg-coolGray-50 group hover:shadow-xl hover:border-emerald-700 transition duration-300 h-28 w-80 px-2 pt-3 pb-2 my-2 border-coolGray-400 shadow-md flex">
      <slot></slot>
      <div class="flex flex-col justify-center items-start px-0.5 text-left">
      <h3 class="text-2xl transition duration-300 filter group-hover:drop-shadow-sm group-hover:font-extrabold text-coolGray-600 group-hover:text-coolGray-900 font-semibold"><slot name="product"><span>HubSpot</span></slot></h3>
      <p class="text-warmGray-400 transition duration-300 group-hover:drop-shadow-sm  group-hover:text-blueGray-600"><slot name="text"><span>Inbound CRM Software</span></slot></p>
      </div>
    </article>
