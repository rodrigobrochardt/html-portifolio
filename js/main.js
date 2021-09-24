function categoryL(){
  const FlexSlider = {
    num_items: document.querySelectorAll(".category_1_item").length,
    
    current: 1,
  
    init1: function() {
      document.querySelectorAll(".category_1_item").forEach(function(element, index) {
        element.style.order = index+1;
      });
  
      this.addEventLeft();

    },
  
    addEventLeft: function() {
      var that = this;
  
      document.querySelector("#buttonNaviCategory1L").addEventListener('click', () => {
        this.gotoNext();
      });
      document.querySelector("#project_category_1").addEventListener('transitionend', () => {
        this.changeOrderL();
      });
    },
    changeOrderL: function() {
      
      if(this.current == this.num_items)
        this.current = 1;
      else 
        this.current++;
  
      let order = 1;
      for(let i=this.current; i<this.num_items; i++) {
        document.querySelector(".category_1_item[data-position='" + i + "']").style.order = order;
        order++;
      }
      for(let i=1; i<this.current; i++) {
        document.querySelector(".category_1_item[data-position='" + i + "']").style.order = order;
        order++;
      }
      document.querySelector("#project_category_1").classList.remove('slider_container_transition');
      document.querySelector("#project_category_1").style.transform = 'translateX(0)';
    },
    gotoNext: function() {
      document.querySelector("#project_category_1").style.flexDirection = "row";
      document.querySelector("#project_category_1").classList.add('slider_container_transition');
      document.querySelector("#project_category_1").style.transform = 'translateX(-100%)';
    }
  };
  
  FlexSlider.init1();
  
  
}
categoryL();

function categoryR(){
  const FlexSlider = {
    num_items: document.querySelectorAll(".category_1_item").length,
    
    current: 1,
  
    init2: function() {
      document.querySelectorAll(".category_1_item").forEach(function(element, index) {
        element.style.order = index;
      });
  
      this.addEventRight();

    },
  
    addEventRight: function() {
      var that = this;
  
      document.querySelector("#buttonNaviCategory1R").addEventListener('click', () => {
        this.gotoPrevious();
      });
      document.querySelector("#project_category_1").addEventListener('transitionend', () => {
        this.changeOrderL();
      });
    },
    changeOrderL: function() {
      if(this.current == this.num_items)
        this.current = 1;
      else 
        this.current++;
  
      let order = this.num_items;
      for(let i=this.current; i>this.num_items; i++) {
        document.querySelector(".category_1_item[data-position='" + i + "']").style.order = order;
        order++;
      }
      for(let i=1; i<this.current; i++) {
        document.querySelector(".category_1_item[data-position='" + i + "']").style.order = order;
        order++;
      }
      document.querySelector("#project_category_1").classList.remove('slider_container_transition');
      document.querySelector("#project_category_1").style.transform = 'translateX(0)';
    },
    gotoPrevious: function() {
      document.querySelector("#project_category_1").style.flexDirection = "row-reverse";
      document.querySelector("#project_category_1").classList.add('slider_container_transition');
      document.querySelector("#project_category_1").style.transform = 'translateX(100%)';
    }
  };
  
  FlexSlider.init2();
};

categoryR()