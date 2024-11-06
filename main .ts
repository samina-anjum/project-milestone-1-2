

document.addEventListener('DOMContentLoaded' , ()=>{
  const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
  const skillsSection = document.getElementById("skillsSection") as HTMLElement;
    toggleButton.addEventListener('click',()=>{
      if (skillsSection.style.display === 'none'){
        skillsSection.style.display = 'block';
      } else {
        skillsSection.style.display = 'none';}
  })
})