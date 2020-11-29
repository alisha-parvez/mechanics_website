var ctx = document.getElementById('myChart').getContext('2d');
var data_set = [];
var y_labels = [];
var div_no= 100;
var l=0;

function create_Point_array(l)
{
  for(let i =0; i<div_no; i= i+1)
  {
    //data_set.push(new Point(0,i+1));
    data_set.push(0);
    y_labels.push(((i+1)*l/(div_no)).toPrecision(3));
  }
}




var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: y_labels,
        datasets: [{
            label: 'Bending Moment M',
            backgroundColor: '#FFD966',
            borderColor: '#f5b642',
            data: data_set
        }]
    },

    // Configuration options go here
    options: {

    }
});

function add_point_F(){
    let new_l_F = parseFloat(document.getElementById('l').value);
    let dist = parseFloat(document.getElementById('d_F').value);
    let mag = parseFloat(document.getElementById('mag_F').value);

    let force_list = document.getElementById('force_list');

    if(new_l_F!=l)
    {
      temp = l;
      l = new_l_F;
      create_Point_array(l);
      chart.update();
      if(temp!=0)
      location.reload();
      force_list.textContent = "";
    }
    for(let i = parseInt(dist*div_no/l)-1;i<div_no;i++)
    {
      data_set[i] += mag*((i+1)*l/(div_no)-dist);
    }
    chart.update();

    force_list.innerHTML += 'Force of magnitude '+mag+' added at '+dist+' from A'+'<br>';
}

function add_point_M(){
    let new_l_M = parseFloat(document.getElementById('l').value);
    let dist = parseFloat(document.getElementById('d_M').value);
    let mag = parseFloat(document.getElementById('mag_M').value);

    let moment_list = document.getElementById('Moment_list');

    if(new_l_M!=l)
    {
      temp = l;
      l = new_l_M;
      create_Point_array(l);
      chart.update();
      if(temp!=0)
      location.reload();
      moment_list.textContent = "";
    }
    for(let i = parseInt(dist*div_no/l)-1;i<div_no;i++)
    {
      data_set[i] -= mag;
    }
    chart.update();

    moment_list.innerHTML += 'moment of magnitude '+mag+' added at '+dist+' from A'+'<br>';
}

function add_point_dist(){
    let new_l_dist = parseFloat(document.getElementById('l').value);
    let start = parseFloat(document.getElementById('start_ds').value);
    let stop = parseFloat(document.getElementById('stop_ds').value);
    let mag = parseFloat(document.getElementById('mag_ds').value);

    ds_list = document.getElementById('Dist_Force_list');

    if(new_l_dist!=l)
    {
      temp = l;
      l = new_l_dist;
      create_Point_array(l);
      chart.update();
      if(temp!=0)
      location.reload();
      ds_list.textContent = "";
    }
    for(let i = parseInt(start*div_no/l)-1;i<div_no;i++)
    {
      if(i<=parseInt(stop*div_no/l)-1)
        {
          let mag_dist = mag*((i+1)*l/(div_no)-start);
          let dist = start + (((i+1)*l/(div_no)-start))/2;
          data_set[i] += mag_dist*((i+1)*l/(div_no)-dist);
        }
      else {
        let mag_dist = mag*(stop-start);
        let dist = start + (stop-start)/2;
        data_set[i] += mag_dist*((i+1)*l/(div_no)-dist);
      }
    }
    chart.update();

    ds_list.innerHTML += 'Distributed Force of intensity '+mag+' added which starts at '+start+' units from A and stops at '+stop+' units from A'+'<br>';
}


Add_Btn_F = document.getElementById('add_btn_F');
Add_Btn_F.addEventListener('click',add_point_F);
Add_Btn_M = document.getElementById('add_btn_M');
Add_Btn_M.addEventListener('click',add_point_M);
Add_Btn_dist = document.getElementById('add_btn_dist');
Add_Btn_dist.addEventListener('click',add_point_dist);
