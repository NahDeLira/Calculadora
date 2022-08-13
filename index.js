const horasDiarias = 8

const calcularSalario = () => {
    const diaTrabalhados = document.querySelector('#dias').value
    const valorHora = document.querySelector('#salario_hora').value
    const valorDia = valorHora * horasDiarias
    const salarioMes = valorDia * diaTrabalhados
    //alert(`Salario eh ${salarioMes}`)
    const salarioTotal = document.querySelector('#salario_total')
    salarioTotal.innerHTML = 'R$ ' + salarioMes.toFixed(2)
      }

      const calcularValorHora = () => {
        const diaTrabalhados = document.querySelector('#dias').value
        const salarioTotal = document.querySelector('#salario_total').value
        const valorHora = (salarioTotal / diaTrabalhados) / horasDiarias
        const salarioHora = document.querySelector('#valor_hora')
        salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
          }     