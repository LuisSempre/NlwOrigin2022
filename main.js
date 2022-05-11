import "./index.css";

document.querySelector("#app").innerHTML = `
<div class="max-w-7xl mx-auto mt-8">
  <div class="space-y-12  text-center w-full">
    <h2 class="uppercase font-bold">Bem vindo a DoctorCare</h2>
    <h1 class="bg-gradient-to-r from-purple-200 via-blue-400 to-violet-800 font-bold bg-clip-text text-transparent text-4xl">Assitência médica simplificada</h1>
    <p class="text-gray-600">Os médicos vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo</p>
    <button class="text-sm uppercase bg-green-500 rounded-full px-8 py-4 text-white font-bold">Agende sua consulta</button>
    <div class="flex items-center justify-center">
     <img src="./woman.png" alt="logo" class=" w-64" />
    </div>
    <h3 class="text-4xl">+3500</h3>
    <p>Pacientes atendidos</p>
    <h3 class="text-4xl">+15</h3>
    <p>Especialistas disponíveis</p>
    <h3 class="text-4xl">+10</h3>
    <p>Anos no mercado</p>
  </div>
</div>
`
