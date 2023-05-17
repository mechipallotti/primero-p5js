function setup() {
    createCanvas(400, 500);
    background(9, 99, 13);
    
    //CUELLO Y TORSO
    fill(198, 23, 23);
    noStroke();
    rect(135, 250, 130, 200);
    rect(0, 400, 400, 100);
    
    //PELO
    fill(0)
    bezier(130,180,110,-70,320,-70,310,190);
    
    //ROSTRO
    fill(245);
    stroke(95);
    ellipse(200,160, 170, 300);
    
    //BARBILLA
    fill(0);
    noStroke();
    bezier(130, 255, 150, 320, 230, 350, 270, 255);
    
    //NARIZ
    fill(255,255,14);
    stroke(220)
    quad(170,110, 160, 215, 170, 220, 173, 110);
    fill(8,8,167);
    quad(178,110, 180, 220, 190, 215, 182, 110);
    
    //CONTORNO OJOS
    fill(255);
    stroke(167,9,9);
    bezier (183,120, 200, 130, 210, 130, 220, 120); //IZQUIERDO 
    bezier (183,120, 185, 110, 210, 110, 220, 120); //IZQUIERDO
  
    bezier (169,120, 160, 130, 155, 130, 136, 120); //DERECHO
    bezier (169,120, 155, 110, 145, 110, 136, 120); //DERECHO
    
    //PUPILAS
    fill(2);
    noStroke();
    ellipse(200,119,13,14);
    ellipse(153,119,13,14);
  }