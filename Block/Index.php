<?php

namespace Freddev\PlpInfiniteScroll\Block;

class Index extends \Magento\Framework\View\Element\Template
{

    /**
     * Helper instance
     * @var \Freddev\PlpInfiniteScroll\Helper\Data
     */
    protected $_helper;

    /**      
    * @param Context $context
    * @param Data $helper      
    */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Freddev\PlpInfiniteScroll\Helper\Data $helper,
        array $data = []
    )
    {
        parent::__construct($context, $data);
        $this->_helper = $helper;
    }

    public function _prepareLayout()
    {
        return parent::_prepareLayout();
    }

    public function isModuleEnable(){

        return $this->_helper->isModuleEnable();

    }

    public function getConfigValue($codeConfig){

        return $this->_helper->getGeneralConfig($codeConfig);

    }
}